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
        w="100%"
      >
        <Box
          padding="2"
          boxShadow="lg"
          bg="white"
          minW={{ base: 370, sm: 250, md: 245 }}
          minH="350px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          gap="12"
        >
          <SkeletonCircle w="44" h="32" p={["8%", "10%", "6%"]} rounded="md" />
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
