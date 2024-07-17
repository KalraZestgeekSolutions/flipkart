/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Box, Text, Heading, Grid, Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import MappingSelectedFilters from "./children/MappingSelectedFilters";
import PriceFilter from "./children/PriceFilter";
import SortBy from "./children/SortBy";

const Filters = ({
  listFilters,
  handleClearAllFilters,
  handleItem,
  handlePriceChange,
  onClose,
  tabsList,
  handleCloseFilter,
  handleSortChange,
}) => {
  const ratingList = [
    { label: "4★ & Above", value: "4★ & Above", type: "rating" },
    { label: "3★ & Above", value: "3★ & Above", type: "rating" },
    { label: "2★ & Above", value: "2★ & Above", type: "rating" },
  ];

  const brandList = [
    { label: "HP", value: "HP", type: "brand" },
    { label: "Epson", value: "Epson", type: "brand" },
    { label: "Canon", value: "Canon", type: "brand" },
  ];

  const MinPrice = [
    { value: 0, label: "0", type: "minPrice" },
    { value: 100, label: "100", type: "minPrice" },
    { value: 200, label: "200", type: "minPrice" },
    { value: 400, label: "400", type: "minPrice" },
    { value: 600, label: "600", type: "minPrice" },
    { value: 800, label: "800", type: "minPrice" },
    { value: 1000, label: "1000", type: "minPrice" },
  ];

  const MaxPrice = [
    { value: 1400, label: "1400", type: "maxPrice" },
    { value: 1600, label: "1600", type: "maxPrice" },
    { value: 2700, label: "2700", type: "maxPrice" },
    { value: 3100, label: "3100", type: "maxPrice" },
    { value: 5000, label: "5000", type: "maxPrice" },
    { value: 10000, label: "10000", type: "maxPrice" },
  ];

  return (
    <>
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
          {listFilters.map((item) => (
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
          selectedItems={listFilters}
          heading="Filter by Price"
          MinPrice={MinPrice}
          MaxPrice={MaxPrice}
          handleItem={handleItem}
          handlePriceChange={handlePriceChange}
        />
        {/* Sort by (only for mobile) */}
        <Box display={{ base: "block", md: "none" }}>
          <SortBy
            tabsList={tabsList}
            handleSortChange={handleSortChange}
            handleItem={handleItem}
          />
        </Box>
        {/* Brand filter */}
        <MappingSelectedFilters
          list={brandList}
          heading="BRAND"
          selectedItems={listFilters}
          handleItem={handleItem}
        />
        {/* Rating filter */}
        <MappingSelectedFilters
          list={ratingList}
          heading="CUSTOMER RATING"
          selectedItems={listFilters}
          handleItem={handleItem}
        />
      </Box>
    </>
  );
};

export default Filters;
