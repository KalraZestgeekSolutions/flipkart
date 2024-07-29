/* eslint-disable react/prop-types */
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Flex, Icon, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";

const MappingSelectedFilters = ({
  list,
  handleItem,
  heading,
  selectedItems,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const clearAll = () => {
    selectedItems.forEach((item) => handleItem(item));
  };

  const hasSelectedItems = selectedItems.length > 0;

  return (
    <Box borderBottom="2px" p="5" borderColor="whitesmoke">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text as="b">{heading}</Text>
        <Icon
          boxSize="6"
          color="gray"
          cursor="pointer"
          onClick={() => setIsOpen(!isOpen)}
          as={isOpen ? ChevronUpIcon : ChevronDownIcon}
        />
      </Box>
      <Spacer mt="4" />
      {isOpen && (
        <Box display="flex" flexDirection="column" gap="3">
          {hasSelectedItems && (
            <Flex
              gap="3"
              justifyContent="start"
              alignItems="center"
              cursor="pointer"
              onClick={clearAll}
            >
              <CloseIcon color="gray.700" bg="gray.300" p="1" boxSize="4" />
              <Text color="gray.500">Clear all</Text>
            </Flex>
          )}
          {list.map((item) => (
            <Checkbox
              key={item.value}
              isChecked={selectedItems.includes(item.value)}
              onChange={() => handleItem(item.value)}
            >
              {item.label}
            </Checkbox>
          ))}
        </Box>
      )}
    </Box>
  );
};

export { MappingSelectedFilters };
