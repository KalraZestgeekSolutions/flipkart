/* eslint-disable react/prop-types */
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState({
    data: [],
  });

  const handleAddItem = useCallback(() => {
    (product) => {
      setCartData((prev) => {
        const updatedCartData = [...prev.data, { ...product, quantity: 1 }];
        return {
          ...prev,
          data: updatedCartData,
        };
      });
      navigate("/cart");
    };
  }, [navigate]);

  const handleRemoveItem = useCallback((_id) => {
    setCartData((prev) => {
      const updatedCartData = prev.data.filter((item) => item._id !== _id);
      return {
        ...prev,
        data: updatedCartData,
      };
    });
  }, []);

  const handleIncrementQuantity = useCallback((index) => {
    setCartData((prevData) => {
      const updatedCartData = prevData.data.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...prevData,
        data: updatedCartData,
      };
    });
  }, []);

  const handleDecrementQuantity = useCallback((index) => {
    setCartData((prevData) => {
      const updatedCartData = prevData.data.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...prevData,
        data: updatedCartData,
      };
    });
  }, []);

  const totalPriceOfAll = useMemo(() => {
    return cartData.data
      .reduce((total, item) => {
        const itemPrice = item.price * item.quantity;
        return total + itemPrice;
      }, 0)
      .toFixed(2);
  }, [cartData]);

  const calculatedTotalAmount = useMemo(() => {
    return cartData.data
      .reduce((total, item) => {
        const discountedPrice = item.discountedPrice || item.price;
        const itemAmount = discountedPrice * item.quantity;
        return total + itemAmount;
      }, 0)
      .toFixed(2);
  }, [cartData]);

  const calculatedTotalDiscount = useMemo(() => {
    return cartData.data
      .reduce((total, item) => {
        const itemPrice = item.price * item.quantity;
        const discountedPrice = item.discountedPrice || item.price;
        const discountAmount = itemPrice - discountedPrice * item.quantity;
        return total + discountAmount;
      }, 0)
      .toFixed(2);
  }, [cartData]);

  const isInCart = useCallback(() => {
    (productId) => {
      return cartData.data.some((item) => item._id === productId);
    };
  }, [cartData.data]);

  return (
    <CartContext.Provider
      value={{
        cartData,
        handleAddItem,
        handleRemoveItem,
        handleIncrementQuantity,
        handleDecrementQuantity,
        isInCart,
        calculatedTotalDiscount,
        calculatedTotalAmount,
        totalPriceOfAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
