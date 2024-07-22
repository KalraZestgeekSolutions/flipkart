/* eslint-disable react-hooks/exhaustive-deps */
import { Box, useDisclosure } from "@chakra-ui/react";
import { DescriptionSkeleton } from "@/components/skeleton/DescriptionSkeleton";
import { AboutProduct } from "./children/AboutProduct";
import { useDescriptionFetch } from "../../hooks/useDescriptionFetch";

const CardDescription = () => {
  const { product, loading, imageIndex, handleImageIndex } =
    useDescriptionFetch();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box fontWeight="bold" gap={[7, 0]} w="100%" bg="gray.100" minH="100vh">
      {loading
        ? Array(1)
            .fill("")
            .map((_, index) => (
              <DescriptionSkeleton key={index} index={index} />
            ))
        : product && (
            <AboutProduct
              handleImageIndex={handleImageIndex}
              product={product}
              imageIndex={imageIndex}
              isOpen={isOpen}
              onToggle={onToggle}
            />
          )}
    </Box>
  );
};

export { CardDescription };
