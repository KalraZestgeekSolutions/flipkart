/* eslint-disable react/prop-types */
import { Box, Flex, Text } from "@chakra-ui/react";

const AuthLeftCard = ({ title, description1, description2 }) => {
  return (
    <>
      <Box
        bg="#2874f0"
        display="flex"
        justifyContent="start"
        alignItems="start"
        flexDirection="column"
        gap="16"
        w={{ md: "80%", xl: "90%" }}
        py="14"
        px={{ base: 5, sm: 10 }}
        backgroundImage="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom"
        backgroundSize="80%"
      >
        <Flex
          color="whitesmoke"
          direction="column"
          justifyContent={{ base: "start", md: "center" }}
          gap="6"
          h={{ base: "60vh", sm: "30vh" }}
        >
          <Text
            fontWeight={900}
            fontSize={{ base: 40, sm: 20, md: 40 }}
            color="white"
            w="100%"
          >
            {title}
          </Text>

          <Flex
            direction="column"
            fontWeight={600}
            fontSize={{ base: 24, sm: 16, md: 24 }}
            w="100%"
          >
            <Text>{description1}</Text>
            <Text>{description2}</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default AuthLeftCard;
