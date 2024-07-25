import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import axios from "axios";

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState({
    data: [],
  });

  const fetchCartData = useCallback(
    async (id) => {
      const token = localStorage.getItem("loginResponse");
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
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          }
        );
        console.log(response);
        setCartData({ data: response.data });
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    },
    [navigate]
  );

  const handleAddItem = (printerId, e) => {
    // e.preventDefault();
    console.log("clicked");
    fetchCartData(printerId);
  };

  const isInCart = useCallback(
    (productId) => {
      return cartData.data.some((item) => item?._id === productId);
    },
    [cartData.data]
  );

  return (
    <CartContext.Provider
      value={{
        cartData,
        handleAddItem,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
