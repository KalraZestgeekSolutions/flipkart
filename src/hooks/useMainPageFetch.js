import { useCallback, useEffect, useState } from "react";
// import { MAINAPI } from "../constants/API";
import axios from "axios";

const useMainPageFetch = ({ allFilters }) => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const { brand, rating, sortType, sortField, minPrice, maxPrice } =
    allFilters || {};

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://flipakartworking.onrender.com/api/printers/filter`,
        {
          brand: brand.length > 0 ? brand : null,
          rating: rating.length > 0 ? rating : null,
          sortOrder: sortType,
          sortField: sortField,
          minPrice: minPrice,
          maxPrice: maxPrice,
        }
      );
      setProductList(response.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [brand, rating, sortField, sortType, maxPrice, minPrice]);

  useEffect(() => {
    fetchData();
  }, [allFilters, fetchData]);

  return {
    productList,
    loading,
  };
};
export { useMainPageFetch };
