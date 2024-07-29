/* eslint-disable react/prop-types */
import { Flex, HStack, Text } from "@chakra-ui/react";

const ProductDetails = ({ product }) => {
  return (
    <Flex gap="3" direction="column">
      <Text fontSize="2xl" fontWeight={400}>
        {product.productTitle}
      </Text>
      <Text
        color="white"
        bg="#388e3c"
        w="fit-content"
        p="1"
        fontSize="12"
        as="b"
      >
        {product.rating} &#9733;
      </Text>
      <HStack>
        <Text
          color="black"
          as=""
          fontSize={{ base: "3xl", md: "sm", lg: "3xl" }}
        >
          &#8377;{product.discountedPrice}
        </Text>

        <Text color="gray.500" as="s" fontSize={{ md: "14px", lg: "xl" }}>
          &#8377;{product.price}
        </Text>
        <Text color="#388e3c" as="b" fontSize={{ md: "12px", lg: "sm" }}>
          {product.discountPercentage}% off
        </Text>
      </HStack>
    </Flex>
  );
};

export { ProductDetails };
