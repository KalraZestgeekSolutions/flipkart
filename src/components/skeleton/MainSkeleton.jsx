import { Box, GridItem, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const MainSkeleton = () => {
  return Array(15)
    .fill("")
    .map((_, index) => (
      <GridItem
        key={index}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          padding="6"
          boxShadow="lg"
          bg="white"
          minW={{ base: 370, sm: 250, md: 250 }}
          minH="400px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="4"
        >
          <SkeletonCircle size="28" p={["8%", "10%", "18%"]} rounded="md" />
          <SkeletonText
            mt="4"
            noOfLines={4}
            spacing="4"
            skeletonHeight="2"
            w="100%"
          />
        </Box>
      </GridItem>
    ));
};

export default MainSkeleton;
