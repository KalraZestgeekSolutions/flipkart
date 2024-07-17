import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import PriceDetails from "./children/PriceDetails";
import UpdateQuantity from "./children/UpdateQuantity";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const { cartData } = useContext(CartContext);
  const productList = cartData.data;
  const handleGoToHome = () => {
    navigate("/");
  };
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg="gray.100"
      minH="100vh"
      p={4}
      w="100%"
    >
      <Flex
        gap="8"
        direction="column"
        mb={4}
        p={2}
        bg="white"
        alignItems="center"
        rounded="md"
        border="3px soild"
        borderColor="black"
      >
        {productList.length <= 0 ? (
          <Flex
            minW="65vw"
            p="5"
            justifyContent="center"
            alignItems="center"
            direction="column"
            gap="5"
            minH="44vh"
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
        ) : (
          productList.map((item, index) => (
            <Box
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap="4"
              key={index}
              p="2"
            >
              <Flex>
                <Box w="40" p="4">
                  <Image cursor="pointer" src={item?.HeadImage} />
                </Box>
                <Flex direction="column" flex="1" gap="5">
                  <Text fontWeight={500} noOfLines={1} fontSize="20">
                    {item?.productTitle}
                  </Text>
                  <Flex gap="2" justifyContent="start" alignItems="center">
                    <Text
                      fontSize={{ base: "sm", md: "lg" }}
                      color="gray.500"
                      as="del"
                    >
                      &#8377;{item?.price}
                    </Text>
                    <Text fontSize={{ base: "sm", md: "xl" }} as="b">
                      &#8377;{item?.discountedPrice}
                    </Text>
                    <Text
                      fontWeight={{ base: 400, md: 500 }}
                      fontSize={{ base: "sm", md: "lg" }}
                      color="#388e3c"
                    >
                      {item?.discountPercentage}% Off
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              {/* update Quantity */}
              <UpdateQuantity item={item} itemId={item._id} index={index} />
              <Divider my="5" />
            </Box>
          ))
        )}
      </Flex>

      {/* Price Details */}
      <Flex w={{ base: "100%", md: "50%" }}>
        <PriceDetails />
      </Flex>
    </Flex>
  );
};

export default Cart;
