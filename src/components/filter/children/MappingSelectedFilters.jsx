/* eslint-disable react/prop-types */
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Icon, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";

const MappingSelectedFilters = ({
  list,
  handleItem,
  heading,
  selectedItems,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box borderBottom="2px" p="5" borderColor="whitesmoke">
      <Box display="flex" alignItems="Center" justifyContent="space-between">
        <Text as="b"> {heading}</Text>
        <Icon
          boxSize="6"
          color="gray"
          cursor="pointer"
          onClick={() => setIsOpen(!isOpen)}
          as={`${isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}`}
        />
      </Box>
      <Spacer mt="4" />
      {isOpen && (
        <Box display="flex" flexDirection="column" gap="3">
          {list.map((item) => (
            <Checkbox
              key={item.value}
              isChecked={selectedItems.some((ele) => ele.value === item.value)}
              onChange={() => handleItem(item)}
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
