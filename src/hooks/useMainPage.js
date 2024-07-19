import { useCallback, useState } from "react";
import useMainFetch from "./useMainFetch";
const useMainPage = () => {
  const { productList, loading } = useMainFetch(allFilters);
  const [allFilters, setAllFilters] = useState({
    sortType: "asc",
    sortField: "price",
    minPrice: 0,
    maxPrice: 160000,
    brand: "",
    rating: "",
  });

  const handleFilterChange = useCallback(() => {
    (filterType, value) => {
      setAllFilters((prev) => ({
        ...prev,
        [filterType]: value,
      }));
    };
  }, []);

  const handleSortChange = useCallback(() => {
    (sortValue) => {
      setAllFilters((prev) => ({
        ...prev,
        sortType: sortValue,
      }));
    };
  }, []);

  const handlePriceChange = useCallback(() => {
    (priceRange) => {
      setAllFilters((prev) => ({
        ...prev,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
      }));
    };
  }, []);

  const handleClearAllFilters = useCallback(() => {
    () => {
      setAllFilters({
        sortType: "asc",
        sortField: "price",
        minPrice: 0,
        maxPrice: 10000,
        brand: "",
        rating: "",
      });
    };
  }, []);

  return {
    productList,
    loading,
    allFilters,
    handleFilterChange,
    handleSortChange,
    handlePriceChange,
    handleClearAllFilters,
  };
};

export { useMainPage };
