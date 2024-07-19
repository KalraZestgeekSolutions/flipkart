/* eslint-disable react/prop-types */
import { Box, Image } from "@chakra-ui/react";
import CartButtons from "./CartButtons";

const Images = ({ product, imageIndex, handleImageIndex }) => {
  const DescriptiveImages = product.DescriptiveImages;

  return (
    <Box
      w={{ base: "100%", md: 500, lg: 700 }}
      minH="70vh"
      display="flex"
      justifyContent=""
      alignItems="center"
      flexDirection={"column"}
      mt="2"
      gap={{ base: 14, md: 10 }}
    >
      <Box
        mt="3 "
        display="flex"
        justifyContent="start"
        alignItems="start"
        minH="40vh"
        p={{ base: 6, md: 0 }}
        gap={{ base: 24, md: 0 }}
        maxW={{ base: "100%", md: 600 }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "100%", md: 32, lg: 32 }}
          minH="100%"
          display="flex"
          flexDirection={{ base: "row", md: "column " }}
        >
          {DescriptiveImages.map((img, index) => (
            <Box
              key={img}
              w={{ base: 44, md: 32, lg: 32 }}
              h={{ base: 32, md: 32, lg: 32 }}
              border="2px solid"
              borderColor={`${imageIndex === index ? "blue.500" : "gray.200"}`}
              display="flex"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              onClick={() => handleImageIndex(index)}
            >
              <Image src={img} p={{ base: 4, sm: 8, md: 4 }} />
            </Box>
          ))}
        </Box>

        <Box
          minH={400}
          minW={{ base: "100%", md: 330, lg: 400 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px solid"
          p=""
          borderColor="gray.200"
        >
          <Image
            maxW={{ base: "100%", md: 300 }}
            src={product.DescriptiveImages[imageIndex]}
            alt={product.productTitle}
            borderRadius="lg"
            p={["2%", "1%", "12%", "2%"]}
            maxH="34vh"
          />
        </Box>
      </Box>

      {/* buttons */}
      <CartButtons product={product} />
    </Box>
  );
};

export { Images };
