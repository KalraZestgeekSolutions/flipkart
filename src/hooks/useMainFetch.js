import { useCallback, useEffect, useState } from "react";
import { MAINAPI } from "../constants/API";
import axios from "axios";

const useMainFetch = ({ allFilters }) => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const fetchData = useCallback(() => {
    async () => {
      setLoading(true);
      try {
        const response = await axios.post(`${MAINAPI}`, {
          brand: allFilters.brand,
          rating: allFilters.rating,
          sortOrder: allFilters.sortType,
          sortField: allFilters.sortField,
          minPrice: allFilters.minPrice,
          maxPrice: allFilters.maxPrice,
        });
        setProductList(response.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  }, [
    allFilters.brand,
    allFilters.rating,
    allFilters.sortField,
    allFilters.sortType,
    allFilters.maxPrice,
    allFilters.minPrice,
  ]);

  useEffect(() => {
    fetchData();
  }, [allFilters, fetchData]);

  return {
    productList,
    loading,
  };
};
export {useMainFetch}
