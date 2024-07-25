import { useCallback, useEffect, useState } from "react";
import { MAINAPI } from "../constants/API";
import axios from "axios";

const useMainPageFetch = ({ allFilters }) => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const { brand, rating, sortType, sortField, minPrice, maxPrice } =
    allFilters || {};

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${MAINAPI}`, {
        brand: brand.length > 0 ? brand : "",
        rating: rating.length > 0 ? rating : "",
        sortOrder: sortType,
        sortField: sortField,
        minPrice: minPrice,
        maxPrice: maxPrice,
      });
      setProductList(response.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [brand, rating, sortField, sortType, maxPrice, minPrice]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    productList,
    loading,
  };
};
export { useMainPageFetch };
