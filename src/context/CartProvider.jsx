import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import axios from "axios";

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState({
    data: [],
  });
  const user = JSON.parse(localStorage.getItem("loginResponse") || "{}");
  const token = user.token;

  // Save cart to local storage
  const saveCartToLocal = (cartItems) => {
    localStorage.setItem("cartData", JSON.stringify(cartItems));
  };

  // Load cart from local storage
  const loadCartFromLocal = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartData") || "[]");
    setCartData({ data: cartItems });
  };

  // Add item to cart
  const addItemToCart = useCallback(
    async (item) => {
      if (token) {
        try {
          const response = await axios.post(
            `https://flipakartworking.onrender.com/api/cart`,
            { printerId: item?._id },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setCartData((prev) => ({
            ...prev,
            data: response?.data?.items,
          }));
          saveCartToLocal(response?.data?.items);
          navigate("/cart");
        } catch (error) {
          console.error("Error adding item to cart:", error);
        }
      } else {
        try {
          const newCartItem = {
            printerId: {
              _id: item._id,
              productTitle: item.productTitle,
              headImage: item.headImage,
              price: item.price,
              discountPercentage: item.discountPercentage,
              discountedPrice: item.discountedPrice,
            },
            quantity: 1,
          };
          setCartData((prev) => {
            const updatedCart = [...prev.data, newCartItem];
            saveCartToLocal(updatedCart);
            return { data: updatedCart };
          });
          navigate("/cart");
        } catch (error) {
          console.error("Error fetching item data:", error);
        }
      }
    },
    [navigate, token]
  );

  // Get items from cart
  const getCartItems = useCallback(async () => {
    if (token) {
      try {
        const response = await axios.get(
          `https://flipakartworking.onrender.com/api/cart`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCartData({ data: response?.data?.items });
        saveCartToLocal(response?.data?.items);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }
  }, [token]);

  // Update quantity
  const updateQuantity = useCallback(
    async (itemId, quantity) => {
      if (token) {
        try {
          const response = await axios.put(
            `https://flipakartworking.onrender.com/api/cart/${itemId}`,
            { quantity },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setCartData({
            data: response?.data?.items,
          });
          saveCartToLocal(response?.data?.items); // Save server cart to local storage
        } catch (error) {
          console.error("Error updating quantity:", error);
        }
      } else {
        setCartData((prev) => {
          const updatedCart = prev.data.map((item) =>
            item?.printerId?._id === itemId ? { ...item, quantity } : item
          );
          saveCartToLocal(updatedCart);
          return { data: updatedCart };
        });
      }
    },
    [token]
  );

  // Delete item (local storage or server)
  const deleteItem = useCallback(
    async (itemId) => {
      if (token) {
        try {
          const response = await axios.delete(
            `https://flipakartworking.onrender.com/api/cart/${itemId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setCartData({
            data: response?.data?.items,
          });
          saveCartToLocal(response?.data?.items); // Save server cart to local storage
        } catch (error) {
          console.error("Error deleting item:", error);
        }
      } else {
        setCartData((prev) => {
          const updatedCart = prev.data.filter(
            (item) => item?.printerId?._id !== itemId
          );
          saveCartToLocal(updatedCart);
          return { data: updatedCart };
        });
      }
    },
    [token]
  );

  useEffect(() => {
    if (token) {
      getCartItems();
    }
  }, [token, getCartItems]);

  // Sync local storage cart data to server when token is obtained
  useEffect(() => {
    if (token) {
      const syncLocalCartToServer = async () => {
        const localCartItems = JSON.parse(
          localStorage.getItem("cartData") || "[]"
        );
        for (const item of localCartItems) {
          await addItemToCart(item?.printerId?._id);
        }
        getCartItems(); // Fetch updated cart from server
      };
      syncLocalCartToServer();
    } else {
      loadCartFromLocal();
    }
  }, [token, addItemToCart, getCartItems]);

  const handleAddItem = (item) => {
    addItemToCart(item);
  };

  const handleIncrementQuantity = (itemId, currentQuantity) => {
    updateQuantity(itemId, currentQuantity + 1);
  };

  const handleDecrementQuantity = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(itemId, currentQuantity - 1);
    }
  };

  const handleRemoveItem = (itemId) => {
    deleteItem(itemId);
  };

  const calculatedTotalDiscount = useMemo(() => {
    return cartData.data
      .reduce((total, item) => {
        return (
          total +
          (item?.printerId?.price - item?.printerId?.discountedPrice) *
            item.quantity
        );
      }, 0)
      .toFixed(2);
  }, [cartData.data]);

  const calculatedTotalAmount = useMemo(() => {
    return cartData.data
      .reduce((total, item) => {
        return total + item?.printerId?.discountedPrice * item.quantity;
      }, 0)
      .toFixed(2);
  }, [cartData.data]);

  const totalPriceOfAll = useMemo(() => {
    return cartData.data
      .reduce((total, item) => {
        return total + item?.printerId?.price * item.quantity;
      }, 0)
      .toFixed(2);
  }, [cartData.data]);

  const isInCart = useCallback(
    (productId) => {
      return cartData.data.some((item) => item?.printerId?._id === productId);
    },
    [cartData.data]
  );

  return (
    <CartContext.Provider
      value={{
        cartData,
        handleAddItem,
        isInCart,
        handleIncrementQuantity,
        handleDecrementQuantity,
        calculatedTotalDiscount,
        calculatedTotalAmount,
        totalPriceOfAll,
        handleRemoveItem,
        token,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
