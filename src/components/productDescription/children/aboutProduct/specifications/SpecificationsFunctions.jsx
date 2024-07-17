/* eslint-disable react/prop-types */
import { Grid, GridItem, Text, Box } from "@chakra-ui/react";
import React from "react";

const Specifications = ({ product, section, keysToDisplay }) => {
  const sectionData = product.specifications[section];

  const formatValue = (value) => {
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    if (Array.isArray(value)) {
      return (
        <Box display="flex" gap="2">
          {value.slice(0, 4).map((item, index) => (
            <Box key={index}>{item},</Box>
          ))}
        </Box>
      );
    }
    return value;
  };

  if (!sectionData) {
    return null;
  }

  // Determine which keys to display
  const entriesToDisplay =
    keysToDisplay && Array.isArray(keysToDisplay)
      ? Object.entries(sectionData).filter(([key]) =>
          keysToDisplay.includes(key)
        )
      : Object.entries(sectionData);

  return (
    <Box px="6">
      <Text fontSize="24" my="3">
        {section.replace(/_/g, " ")}
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap="4" mt="5">
        {entriesToDisplay.map(([key, value]) => (
          <React.Fragment key={key}>
            <GridItem color="gray.500" w="100%">
              {key.replace(/_/g, " ")}:
            </GridItem>
            <GridItem w="100%">{formatValue(value)}</GridItem>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default Specifications;
