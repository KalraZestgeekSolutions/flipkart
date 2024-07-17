import { useState } from "react";

export function useManageCart() {
  const [cartData, setCartData] = useState({
    data: [],
    totalPrice: 0,
    totalDiscount: 0,
    totalAmount: 0,
  });

  // const [loading, setLoading] = useState(false);

  const handleRemoveItem = async (_id) => {
    const updatedCartData = cartData.data.filter((item) => item._id !== _id);
    setCartData((prevData) => ({
      ...prevData,
      data: updatedCartData,
    }));
  };

  const handleAddItem = (product) => {
    console.log("product", product);
    const updatedCartData = [...cartData.data, product];
    setCartData((prevData) => ({
      ...prevData,
      data: updatedCartData,
    }));
    console.log("Added", updatedCartData);
  };
  const handleIncrementQuantity = (index) => {
    const updatedCartData = [...cartData.data];
    updatedCartData[index].quantity++;
    setCartData((prevData) => ({
      ...prevData,
      data: updatedCartData,
    }));
  };

  const handleDecrementQuantity = (index) => {
    const updatedCartData = [...cartData.data];
    if (updatedCartData[index].quantity > 1) {
      updatedCartData[index].quantity--;
    }
    setCartData((prevData) => ({
      ...prevData,
      data: updatedCartData,
    }));
  };

  const handleCalculateTotalPrice = () => {
    const totalAmount = cartData.data.reduce((total, product) => {
      const discountedPrice = product.printerId?.discountedPrice || 0;
      return total + discountedPrice * product.quantity;
    }, 0);
    return totalAmount;
  };

  console.log("cartData111", cartData);
  const productList = cartData.data;

  const priceDetails = {
    totalPrice: cartData.totalPrice,
    totalDiscount: cartData.totalDiscount,
    totalAmount: cartData.totalAmount,
  };

  return {
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleCalculateTotalPrice,
    productList,
    priceDetails,
    // loading,
    handleRemoveItem,
    handleAddItem,
  };
}
