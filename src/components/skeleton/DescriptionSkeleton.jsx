/* eslint-disable react/prop-types */
import { Box, GridItem, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const DescriptionSkeleton = () => {
  return (
    <GridItem display="flex" justifyContent="center" alignItems="center">
      <Box
        padding="6"
        boxShadow="lg"
        mx="6"
        bg="white"
        w="100%"
        h="100vh"
        display="flex"
        alignItems="start"
        justifyContent="center"
        gap="4"
      >
        <SkeletonCircle size="28" p={["8%", "10%", "18%"]} rounded="md" />
        <SkeletonText
          mt="4"
          noOfLines={6}
          spacing="6"
          skeletonHeight="2"
          w="100%"
        />
      </Box>
    </GridItem>
  );
};
export { DescriptionSkeleton };
