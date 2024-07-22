/* eslint-disable react/prop-types */
import { Grid, GridItem, Text, Box } from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";

export const SpecificationsFilters = ({ product, section, keysToDisplay }) => {
  const sectionData = product?.specifications?.[section];

  const formatValue = useCallback((value) => {
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    if (Array.isArray(value)) {
      return (
        <Box display="flex" gap="2" flexWrap="wrap">
          {value.slice(0, 4).map((item, index) => (
            <Box key={index}>{item},</Box>
          ))}
        </Box>
      );
    }
    return value;
  }, []);

  // Determine which keys to display
  const entriesToDisplay = useMemo(() => {
    if (!sectionData) return [];
    if (keysToDisplay && Array.isArray(keysToDisplay)) {
      return Object.entries(sectionData).filter(([key]) =>
        keysToDisplay.includes(key)
      );
    }
    return Object.entries(sectionData);
  }, [keysToDisplay, sectionData]);

  if (!sectionData) {
    return null;
  }

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
