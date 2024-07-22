/* eslint-disable react/prop-types */
import { Box, Text, Heading, Grid, Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { MappingSelectedFilters } from "./children/MappingSelectedFilters";
import { SortBy } from "./children/SortBy";
import { ratingList, brandList } from "@/constants/FilterConstants";
import { PriceFilter } from "./children/PriceFilter";

export const Filters = ({
  onClose,
  allFilters,
  handleClearAllFilters,
  handleSortChange,
  handleFilterChange,
  handlePriceChange,
}) => {
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
        {allFilters.brand.map((item) => (
          <Box
            key={item}
            bg="lightgray"
            fontSize="sm"
            px="2"
            py="1"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>{item}</Text>
            <CloseIcon
              boxSize="3"
              cursor="pointer"
              onClick={() => handleFilterChange("brand", item)}
            />
          </Box>
        ))}
        {allFilters.rating.map((item) => (
          <Box
            key={item}
            bg="lightgray"
            fontSize="sm"
            px="2"
            py="1"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>{item}</Text>
            <CloseIcon
              boxSize="3"
              cursor="pointer"
              onClick={() => handleFilterChange("rating", item)}
            />
          </Box>
        ))}
      </Grid>

      <PriceFilter handlePriceChange={handlePriceChange} />

      <Box display={{ base: "block", md: "none" }}>
        <SortBy handleSortChange={handleSortChange} />
      </Box>
      <MappingSelectedFilters
        list={brandList}
        heading="BRAND"
        selectedItems={allFilters.brand}
        handleItem={(item) => handleFilterChange("brand", item)}
      />
      <MappingSelectedFilters
        list={ratingList}
        heading="CUSTOMER RATING"
        selectedItems={allFilters.rating}
        handleItem={(item) => handleFilterChange("rating", item)}
      />
    </Box>
  );
};
