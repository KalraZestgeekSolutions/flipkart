/* eslint-disable react/prop-types */
import { Button, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import RemovePopUp from "./RemovePopUp";
const UpdateQuantity = ({ item, index, itemId }) => {
  const { handleIncrementQuantity, handleDecrementQuantity } =
    useContext(CartContext);
  return (
    <Flex w="100%" gap="8">
      <Flex gap="3" justifyContent="center" alignItems="center">
        <Button
          variant="outline"
          onClick={() => handleDecrementQuantity(index)}
          cursor={`${item.quantity === 1 ? " default" : "pointer"} `}
          color={`${item.quantity === 1 ? "gray.400" : "black"} `}
          rounded="100%"
          fontSize="24"
          p="3"
          _hover={{ bg: "none" }}
        >
          -
        </Button>
        <Text>{item.quantity}</Text>
        <Button
          variant="outline"
          onClick={() => handleIncrementQuantity(index)}
          rounded="100%"
          fontSize="24"
          p="3"
          _hover={{ bg: "none" }}
        >
          +
        </Button>
      </Flex>
      <Flex w="100%" direction={{ base: "column", sm: "row", md: "row" }}>
        <Button fontSize="20" variant="none" _hover={{ color: "#2370f4" }}>
          SAVE FOR LATER
        </Button>

        <RemovePopUp itemId={itemId} />
      </Flex>
    </Flex>
  );
};
export default UpdateQuantity;
