import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { PriceDetails } from "./children/PriceDetails";
import { UpdateQuantity } from "./children/UpdateQuantity";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { EmptyCart } from "./children/EmptyCart";

const Cart = () => {
  const { cartData } = useContext(CartContext);
  const productList = cartData.data;

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
        maxH={{ base: "55vh", lg: "87vh" }}
        maxW={{ base: "auto", md: "60vw", lg: "90%" }}
        overflow="hidden"
        border="1px solid"
        borderColor="gray.400"
        position="relative"
      >
        <Box
          overflow="scroll"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          pb="28"
        >
          {productList.length <= 0 ? (
            <EmptyCart />
          ) : (
            productList.map((item, index) => (
              <Box
                key={index}
                w="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap="2"
                p="2"
              >
                <Flex gap="3" w="100%">
                  <Box w="40" p="2" my="4">
                    <Image
                      cursor="pointer"
                      w="100%"
                      h="100%"
                      src={item.printerId?.headImage}
                    />
                  </Box>
                  <Flex direction="column" flex="1" gap="5">
                    <Text fontWeight={500} noOfLines={1} fontSize="20">
                      {item.printerId?.productTitle}
                    </Text>
                    <Flex gap="2" justifyContent="start" alignItems="center">
                      <Text
                        fontSize={{ base: "sm", md: "lg" }}
                        color="gray.500"
                        as="del"
                      >
                        &#8377;{item.printerId?.price}
                      </Text>
                      <Text fontSize={{ base: "sm", md: "xl" }} as="b">
                        &#8377;{item.printerId?.discountedPrice}
                      </Text>
                      <Text
                        fontWeight={{ base: 400, md: 500 }}
                        fontSize={{ base: "sm", md: "lg" }}
                        color="#388e3c"
                      >
                        {item.printerId?.discountPercentage}% Off
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                {/* update Quantity */}
                <UpdateQuantity item={item} />
                <Divider my="5" />
              </Box>
            ))
          )}
        </Box>

        <Flex
          position="absolute"
          bottom="0"
          h="28"
          bg="white"
          w="100%"
          justifyContent="end"
          p="3"
          boxShadow="dark-lg"
        >
          <Button
            bg="tomato"
            _hover={{}}
            px="28"
            py="10"
            color="white"
            rounded="sm"
            fontWeight={700}
            fontSize="24"
          >
            Place Order
          </Button>
        </Flex>
      </Flex>
      {/* Price Details */}
      <Flex w={{ base: "100%", md: "40%", xl: "50%" }}>
        <PriceDetails />
      </Flex>
    </Flex>
  );
};

export { Cart };
