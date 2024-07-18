/* eslint-disable react-hooks/exhaustive-deps */
import { Box, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "@/components/skeleton/Skeleton";
import AboutProduct from "./children/AboutProduct";

const CardDescription = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
  const handleImageIndex = (index) => {
    setImageIndex(index);
  };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_PUBLIC_API_URL}/api/printers/${productId}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return (
    <Box fontWeight="bold" gap={[7, 0]} w="100%" bg="gray.100" minH="100vh">
      {loading
        ? Array(1)
            .fill("")
            .map((_, index) => <Skeleton key={index} index={index} />)
        : product && (
            <React.Fragment key={productId}>
              {/* description */}
              <AboutProduct
                handleImageIndex={handleImageIndex}
                product={product}
                imageIndex={imageIndex}
                isOpen={isOpen}
                onToggle={onToggle}
              />
            </React.Fragment>
          )}
    </Box>
  );
};

export default CardDescription;
