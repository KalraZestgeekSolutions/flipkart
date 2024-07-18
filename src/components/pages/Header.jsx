/* eslint-disable react/prop-types */
import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const Header = () => {
  const { cartData } = useContext(CartContext);
  return (
    <Box
      bg="white"
      h="20"
      p="4"
      alignItems="center"
      display="flex"
      borderBottom="1px"
      borderColor="whitesmoke"
      w="100%"
      justifyContent="space-around"
    >
      <Box w="100%">
        <Image
          src="/Flipkart_idmH_B14SD_1.svg"
          boxSize="100px"
          ml={{ base: 2, md: 24 }}
          color="white"
        />
      </Box>
      <Flex
        gap="3"
        w="100%"
        fontWeight={800}
        justifyContent={{ base: "center", md: "end" }}
        pr={{ base: 0, md: 9 }}
      >
        <Link _hover={{}} to="/">
          HOME
        </Link>
        <Link _hover={{}} to="/cart">
          CART ({cartData.data.length} items)
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
