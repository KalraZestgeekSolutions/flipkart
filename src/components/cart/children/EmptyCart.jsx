import { Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const EmptyCart = () => {
  const navigate = useNavigate();
  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Flex
        minW="65vw"
        p="5"
        justifyContent="center"
        alignItems="center"
        direction="column"
        gap="5"
      >
        <Text fontSize={24}>Your cart is empty</Text>
        <Button
          px="8"
          py="8"
          bg="orange"
          color="white"
          onClick={handleGoToHome}
          _hover={{}}
          rounded={false}
          fontWeight={900}
        >
          SHOP NOW
        </Button>
      </Flex>
    </>
  );
};

// export default EmptyCart;
