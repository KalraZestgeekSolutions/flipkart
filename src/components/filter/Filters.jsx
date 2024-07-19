/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Box, Text, Heading, Grid, Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import MappingSelectedFilters from "./children/MappingSelectedFilters";
import PriceFilter from "./children/PriceFilter";
import SortBy from "./children/SortBy";
import useMainPage from "../../hooks/useMainPage";
import {
  ratingList,
  brandList,
  MinPrice,
  MaxPrice,
} from "../../constants/FilterConstants";

const Filters = ({ onClose }) => {
  const {
    allFilters,
    handleItem,
    handleClearAllFilters,
    handleSortChange,
    handlePriceChange,
    handleCloseFilter,
  } = useMainPage();

  return (
    <Box
      border="2px"
      minH="100vh"
      borderColor="whitesmoke"
      bg="white"
      w="100%"
      p="0"
    >
      <Box
        display={{ base: "flex", md: "none" }}
        onClick={onClose}
        rounded="full"
        w="100%"
        h="10"
        justifyContent="flex-end"
        alignItems="center"
        cursor="pointer"
        textAlign="right"
        p="3"
      >
        <CloseIcon boxSize="4" />
      </Box>
      <Flex
        justifyContent="space-between"
        borderBottom="2px"
        px="2"
        py="2"
        borderColor="whitesmoke"
      >
        <Heading size="md" mb="2">
          Filters
        </Heading>
        <Text
          color="#2874f0"
          fontWeight="600"
          cursor="pointer"
          onClick={handleClearAllFilters}
        >
          CLEAR ALL
        </Text>
      </Flex>
      <Grid templateColumns="repeat(2,1fr)" gap="4" p="2">
        {/* Display selected filters */}
        {allFilters.map((item) => (
          <Box
            key={item.value}
            bg="lightgray"
            fontSize="sm"
            px="2"
            py="1"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>{item.label}</Text>
            <CloseIcon
              boxSize="3"
              cursor="pointer"
              onClick={() => handleCloseFilter(item)}
            />
          </Box>
        ))}
      </Grid>
      {/* Price range filter */}
      <PriceFilter
        selectedItems={allFilters}
        heading="Filter by Price"
        MinPrice={MinPrice}
        MaxPrice={MaxPrice}
        handleItem={handleItem}
        handlePriceChange={handlePriceChange}
      />
      {/* Sort by (only for mobile) */}
      <Box display={{ base: "block", md: "none" }}>
        <SortBy handleSortChange={handleSortChange} handleItem={handleItem} />
      </Box>
      {/* Brand filter */}
      <MappingSelectedFilters
        list={brandList}
        heading="BRAND"
        selectedItems={allFilters}
        handleItem={handleItem}
      />
      {/* Rating filter */}
      <MappingSelectedFilters
        list={ratingList}
        heading="CUSTOMER RATING"
        selectedItems={allFilters}
        handleItem={handleItem}
      />
    </Box>
  );
};

export { Filters };
