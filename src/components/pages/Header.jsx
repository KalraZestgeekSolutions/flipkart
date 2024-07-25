/* eslint-disable react/prop-types */
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const Header = () => {
  const { cartData } = useContext(CartContext);
  const user = JSON.parse(localStorage.getItem("loginResponse") || "{}");
  const token = user.token;

  return (
    <Box
      bg="#2874f0"
      h="20"
      p="4"
      alignItems="center"
      display="flex"
      borderBottom="1px"
      borderColor="whitesmoke"
      w="100%"
      justifyContent="space-around"
      color="white"
    >
      <Box w="50%">
        <Image
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          w="44"
          // h="12"
          ml={{ base: 2, md: 24 }}
          color="white"
          p="5"
        />
      </Box>
      <Flex
        gap="3"
        w="100%"
        fontWeight={1000}
        justifyContent={{ base: "center", md: "end" }}
        pr={{ base: 0, md: 9 }}
        alignItems="center"
      >
        <Link _hover={{}} to="/">
          HOME
        </Link>
        <Link _hover={{}} to={token ? "/cart" : "/auth/login"}>
          CART ({cartData.data.length} items)
        </Link>

        <Link _hover={{}} to="/auth/login">
          <Button
            color="#2874f0"
            bg="white"
            px="14"
            rounded="sm"
            py="2"
            fontWeight={900}
            boxShadow="md"
          >
            LOGIN
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export { Header };
