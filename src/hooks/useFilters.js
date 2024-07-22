import { useCallback, useState } from "react";
import { useMainPageFetch } from "./useMainPageFetch";

export default function useFilters() {
  const [allFilters, setAllFilters] = useState({
    sortType: "asc",
    sortField: "price",
    minPrice: 0,
    maxPrice: 160000,
    brand: [],
    rating: [],
  });

  const { productList, loading } = useMainPageFetch({ allFilters });
  console.log(productList, "useFiltersProducts");

  const handleFilterChange = useCallback((filterType, value) => {
    setAllFilters((prev) => {
      if (prev[filterType].includes(value)) {
        return {
          ...prev,
          [filterType]: prev[filterType].filter((ele) => ele !== value),
        };
      } else {
        return {
          ...prev,
          [filterType]: [...prev[filterType], value],
        };
      }
    });
  }, []);

  const handleSortChange = useCallback((sortValue) => {
    setAllFilters((prev) => ({
      ...prev,
      sortType: sortValue,
    }));
  }, []);

  const handlePriceChange = useCallback((priceRange) => {
    setAllFilters((prev) => ({
      ...prev,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    }));
  }, []);

  const handleClearAllFilters = useCallback(() => {
    setAllFilters({
      sortType: "asc",
      sortField: "price",
      minPrice: 0,
      maxPrice: 10000,
      brand: [],
      rating: [],
    });
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
}
