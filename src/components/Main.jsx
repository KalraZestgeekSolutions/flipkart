import PropTypes from "prop-types";
import { useRef } from "react";
import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import { Filters } from "./filter/Filters";
import { ProductList } from "./pages/ProductList";
import { SortBy } from "./filter/children/SortBy";
import { FilterTemplate } from "./templates/FilterTemplate";
import useFilters from "../hooks/useFilters";

const Main = () => {
  const {
    productList,
    loading,
    allFilters,
    handleClearAllFilters,
    handleSortChange,
    handleFilterChange,
    handlePriceChange,
  } = useFilters();
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      minH="100vh"
      minW="100vw"
      gap={{ base: 10, md: 1 }}
      fontWeight="bold"
      bg="gray.100"
    >
      <GridItem h="2" display={{ base: "block", md: "none" }} zIndex={1}>
        <FilterTemplate
          onOpen={onOpen}
          onClose={onClose}
          btnRef={btnRef}
          isOpen={isOpen}
        >
          <Filters
            onClose={onClose}
            allFilters={allFilters}
            handleClearAllFilters={handleClearAllFilters}
            handleSortChange={handleSortChange}
            handleFilterChange={handleFilterChange}
            handlePriceChange={handlePriceChange}
          />
        </FilterTemplate>
      </GridItem>
      <Box
        display="flex"
        gap="2"
        justifyContent="center"
        alignItems="start"
        flexDirection="row"
        p="5"
        minW="100vw"
      >
        <Box
          display={{ base: "none", md: "block" }}
          colSpan={{ xl: 1 }}
          w={["100%", "100%", "55%", "50%"]}
        >
          <Filters
            allFilters={allFilters}
            handleClearAllFilters={handleClearAllFilters}
            handleSortChange={handleSortChange}
            handleFilterChange={handleFilterChange}
            handlePriceChange={handlePriceChange}
          />
        </Box>

        <GridItem colSpan={{ base: 1 }} w={["100%", "100%", "70%", "120%"]}>
          <Box
            display={{ base: "none", md: "block" }}
            colSpan={{ xl: 1 }}
            w="100%"
          >
            <SortBy handleSortChange={handleSortChange} />
          </Box>

          <ProductList loading={loading} productList={productList} />
        </GridItem>
      </Box>
    </Grid>
  );
};
SortBy.propTypes = {
  data: PropTypes.string,
};

export default Main;
