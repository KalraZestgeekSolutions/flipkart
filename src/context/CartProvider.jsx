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

  // add item to cart
  const addItemToCart = useCallback(
    async (id) => {
      if (!token) {
        console.error("No token found in local storage");
        navigate("/auth/login");
        return;
      }
      try {
        const response = await axios.post(
          `https://flipakartworking.onrender.com/api/cart`,
          { printerId: id },
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
        navigate("/cart");
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    },
    [navigate, token]
  );

  // get items from cart
  const getCartItems = useCallback(async () => {
    if (!token) {
      console.error("No token found in local storage");
      navigate("/auth/login");
      return;
    }
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
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  }, [token, navigate]);

  const updateQuantity = useCallback(
    async (itemId, quantity) => {
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
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    },
    [token]
  );

  const deleteItem = useCallback(
    async (itemId) => {
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
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    },
    [token]
  );

  useEffect(() => {
    if (token) {
      getCartItems();
    }
  }, [token, getCartItems]);

  const handleAddItem = (id) => {
    addItemToCart(id);
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
        return total + item.printerId?.price * item.quantity;
      }, 0)
      .toFixed(2);
  }, [cartData.data]);

  const isInCart = useCallback(
    (productId) => {
      return (
        Array.isArray(cartData.data) &&
        cartData.data.some((item) => item?._id === productId)
      );
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
