import { Box, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const PriceDetails = () => {
  const {
    cartData,
    calculateTotalDiscount,
    handleCalculateTotalAmount,
    totalPriceOfAll,
  } = useContext(CartContext);
  return (
    <>
      <Flex
        direction="column"
        flex="1"
        p={4}
        bg="white"
        ml={{ md: 4 }}
        maxH="44vh"
        fontSize="20"
      >
        <Text fontWeight="bold" color="gray.500">
          PRICE DETAILS
        </Text>
        <Divider my="4" />
        <Grid gap="5" templateColumns="repeat(2,1fr)" fontWeight={500}>
          <GridItem>Price ( {cartData.data.length} item) </GridItem>
          <GridItem textAlign="end">&#8377; {totalPriceOfAll}</GridItem>
          <GridItem>Discount </GridItem>
          <GridItem color="#388e3c" textAlign="end">
            -&#8377; {calculateTotalDiscount}
          </GridItem>
        </Grid>
        <Box
          my="4"
          py="4"
          borderTop="1px dashed"
          borderBottom="1px dashed"
          borderColor="gray.400"
        >
          <Flex justifyContent="space-between" w="100%">
            <GridItem fontWeight="bold">Total Amount</GridItem>
            <GridItem fontWeight={800}>
              &#8377; {handleCalculateTotalAmount}
            </GridItem>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default PriceDetails;
