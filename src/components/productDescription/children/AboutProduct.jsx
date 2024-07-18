/* eslint-disable react/prop-types */
import ProductDetails from "./aboutProduct/ProductDetails";
import Highlights from "./aboutProduct/Highlights";
import AllSpecifications from "./aboutProduct/specifications/AllSpecifications";
import { Box, Card, CardBody, Stack } from "@chakra-ui/react";
import Images from "./aboutProduct/Images";

const AboutProduct = ({
  product,
  isOpen,
  onToggle,
  imageIndex,
  handleImageIndex,
}) => {
  return (
    <>
      <Box
        key={product.productTitle}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="gray.100"
        px="4"
      >
        <Card
          position="relative"
          minW="100%"
          minH="100vh"
          rounded={false}
          borderColor="white"
          direction={{ base: "column", md: "row" }}
          alignItems="start"
          justifyContent="center"
          pb="44"
          gap={{ base: 14, md: 4, lg: 3 }}
          px="4"
        >
          <Images
            handleImageIndex={handleImageIndex}
            product={product}
            imageIndex={imageIndex}
          />
          <Stack mt="4" bottom="4" w="auto" minH="100vh">
            <CardBody
              display="flex"
              gap="2"
              flexDirection="column"
              p={{ base: 4, md: 0 }}
            >
              <ProductDetails product={product} />
              <Highlights product={product} />
              <AllSpecifications
                isOpen={isOpen}
                onToggle={onToggle}
                product={product}
              />
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default AboutProduct;
