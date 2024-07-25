/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {
  Card,
  Text,
  HStack,
  Stack,
  CardBody,
  Image,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MainSkeleton from "../skeleton/MainSkeleton";

const ProductList = ({ loading, productList }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
      fontWeight="bold"
      mt="4"
      gap={[7, 1]}
    >
      {loading ? (
        <MainSkeleton />
      ) : (
        productList.map((product) => (
          <GridItem
            key={product._id}
            justifyContent="center"
            alignItems="center"
          >
            <Link to={`/${product._id}`}>
              <Card
                position="relative"
                minW={{ base: 250, md: 250 }}
                minH={350}
                rounded={false}
                _hover={{
                  transform: "scale(1.01)",
                  transition: "transform .5s ease-in",
                  boxShadow: "2xl",
                  zIndex: 1,
                }}
                borderColor="white"
                alignItems="center"
                justifyContent="center"
                direction={{ base: "row", sm: "column" }}
              >
                <Box
                  position="absolute"
                  top="0"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  py="10"
                  w="100%"
                >
                  <Image
                    objectFit="cover"
                    src={product.headImage}
                    alt={product.productTitle.slice(0, 80)}
                    borderRadius="lg"
                    my="5"
                    maxW={["65%"]}
                  />
                </Box>
                <Stack
                  spacing="2"
                  bottom="2"
                  flex="1"
                  position="absolute"
                  px="0"
                >
                  <CardBody>
                    <Text size="md" noOfLines={1}>
                      {product.productTitle}
                    </Text>
                    <Text
                      color="white"
                      bg="#388e3c"
                      w="44px"
                      p="1"
                      fontSize="10"
                      as="b"
                    >
                      {product.rating} &#9733;
                    </Text>
                    <HStack>
                      <Text color="black" as="b" fontSize="md">
                        &#8377;{product.discountedPrice}
                      </Text>

                      <Text color="gray.500" as="s" fontSize="sm">
                        &#8377;{product.price}
                      </Text>
                      <Text color="#388e3c" as="b" fontSize="sm">
                        {product.discountPercentage}% off
                      </Text>
                    </HStack>
                  </CardBody>
                </Stack>
              </Card>
            </Link>
          </GridItem>
        ))
      )}
    </Grid>
  );
};

export { ProductList };
