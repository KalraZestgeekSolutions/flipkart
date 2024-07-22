import { useEffect, useState } from "react";
import axios from "axios";
import { DESCRIPTIONAPI } from "../constants/API";
import { useParams } from "react-router-dom";

const useDescriptionFetch = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageIndex = (index) => {
    setImageIndex(index);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${DESCRIPTIONAPI}/${productId}`);
        console.log(response);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return {
    product,
    loading,
    productId,
    imageIndex,
    handleImageIndex,
  };
};

export { useDescriptionFetch };
