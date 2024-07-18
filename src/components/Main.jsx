import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Filters from "./filter/Filters";
import ProductList from "./pages/ProductList";
import SortBy from "./filter/children/SortBy";
import FilterListByType from "./filter/children/FilterListByType";
import FilterTemplate from "./templates/FilterTemplate";

const Main = () => {
  const [productList, setProductList] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const [listFilters, setListFilters] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(true);
  const btnRef = useRef();
  const [sortField, setSortField] = useState(400);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // const API_ENDPOIT = import.meta.env.VITE_PUBLIC_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const filteredBrands = FilterListByType(listFilters, "brand");
      const filteredRatings = FilterListByType(listFilters, "rating");

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_PUBLIC_API_URL}/api/printers/filter`,
          {
            brand: filteredBrands,
            rating: filteredRatings,
            sortOrder: sortType,
            sortField: sortField,
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
          }
        );
        console.log(response.data);
        setProductList(response.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [listFilters, sortType, sortField, priceRange]);

  const handleItem = (item) => {
    setListFilters((prev) => {
      if (!prev.some((i) => i.value === item.value)) {
        return [...prev, item];
      }
      return prev.filter((ele) => ele.value !== item.value);
    });
  };
  // remove a particular filter
  const handleCloseFilter = (item) => {
    setListFilters((prev) => prev.filter((i) => i.value !== item.value));
  };

  const handleClearAllFilters = () => {
    setListFilters([]);
  };

  const handleSortChange = (sortValue) => {
    setSortType(sortValue);
    setSortField("price");
  };

  const handlePriceChange = (priceRange) => {
    setPriceRange(priceRange);
  };

  return (
    <Grid
      templateAreas={"filters filters"}
      display="flex"
      flexDirection={{ base: "column" }}
      justifyContent="start"
      alignItems="start"
      minH="100vh"
      minW={["100vw"]}
      gap={{ base: 10, md: 1 }}
      fontWeight="bold"
      bg="gray.100"
    >
      <GridItem
        area={"filters"}
        h="2"
        display={{ base: "block", md: "none" }}
        zIndex={1}
      >
        <FilterTemplate
          onOpen={onOpen}
          onClose={onClose}
          btnRef={btnRef}
          isOpen={isOpen}
        >
          <Filters
            handleClearAllFilters={handleClearAllFilters}
            handleItem={handleItem}
            handleCloseFilter={handleCloseFilter}
            listFilters={listFilters}
            onClose={onClose}
            handleSortChange={handleSortChange}
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
        minW={["100vw"]}
      >
        <Box
          display={{ base: "none", md: "block" }}
          colSpan={{ xl: 1 }}
          w={["100%", "100%", "55%"]}
        >
          <Filters
            handleClearAllFilters={handleClearAllFilters}
            handleItem={handleItem}
            handleCloseFilter={handleCloseFilter}
            listFilters={listFilters}
            handlePriceChange={handlePriceChange}
          />
        </Box>

        <GridItem colSpan={{ base: 1 }} w={["100%", "100%", "70%", "120%"]}>
          <Box
            display={{ base: "none", md: "block" }}
            colSpan={{ xl: 1 }}
            w={["100%"]}
          >
            <SortBy
              handleSortChange={handleSortChange}
              handleItem={handleItem}
            />
          </Box>

          <ProductList loading={loading} productList={productList} />
        </GridItem>
      </Box>
    </Grid>
  );
};

export default Main;
