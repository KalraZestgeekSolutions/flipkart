import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

const CartButtons = ({ product }) => {
  const { handleAddItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <Flex
      gap="3"
      justifyContent={{
        base: "start",
        sm: "center",
        md: "start",
        lg: "center",
      }}
      alignItems={{ base: "start", sm: "center", md: "start" }}
      w={{ base: "100%" }}
      py="1"
      h="auto"
      px={{ base: 5, md: 2 }}
      direction={{ base: "column", sm: "row" }}
    >
      {isInCart(product._id) ? (
        <Button
          w="100%"
          bg="orange"
          py="8"
          rounded={false}
          color="white"
          fontWeight={800}
          fontSize="24"
          onClick={handleGoToCart}
        >
          GO TO CART
        </Button>
      ) : (
        <Button
          w="100%"
          py="8"
          bg="orange"
          fontSize="24"
          rounded={false}
          color="white"
          fontWeight={800}
          onClick={() => handleAddItem(product)}
        >
          ADD TO CART
        </Button>
      )}

      <Button
        w="100%"
        py="8"
        fontSize="24"
        bg="tomato"
        rounded={false}
        color="white"
        fontWeight={800}
      >
        BUY NOW
      </Button>
    </Flex>
  );
};

export { CartButtons };
