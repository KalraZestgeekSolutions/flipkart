/* eslint-disable react/prop-types */
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const DescriptionSkeleton = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" px="4">
      <Box
        boxShadow="xl"
        bg="white"
        minW="100%"
        minH="100vh"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        gap="16"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="start"
          w="50vw"
          h={500}
        >
          <SkeletonCircle rounded={false} size={100} />
          <SkeletonCircle
            rounded={false}
            size={500}
            border="2px solid"
            borderColor="black"
          />
        </Box>

        <SkeletonText
          pr="10"
          mt="4"
          noOfLines={6}
          spacing="4"
          skeletonHeight="2"
          w={["70%", "50%"]}
        />
      </Box>
    </Box>
  );
};
export { DescriptionSkeleton };
