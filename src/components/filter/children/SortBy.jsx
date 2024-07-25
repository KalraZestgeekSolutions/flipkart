/* eslint-disable react/prop-types */
import { Text, Flex, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { tabs } from "@/constants/TabConstants";

const SortBy = (props) => {
  const handleSortChange = props.handleSortChange;
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (index, tab) => {
    setActiveTab(index);
    handleSortChange(tab.value);
  };

  return (
    <Box p={5} width="100%" color="black" bg="white" overflowX="scroll">
      <Flex
        alignItems="center"
        gap={1}
        w="100%"
        borderBottom="1px"
        borderColor="whitesmoke"
      >
        <Box minW="fit-content">
          {" "}
          <Text as="b" display={{ base: "none", md: "block" }}>
            Sort By
          </Text>
        </Box>
        <Flex
          width="100%"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="start"
          alignItems="start"
        >
          {tabs.map((tab, index) => (
            <Button
              variant="none"
              rounded={false}
              borderBottom="2px solid"
              borderColor={activeTab === index ? "#2874f0" : "gray.200"}
              color={activeTab === index ? "#2874f0" : " black"}
              key={tab.value}
              onClick={() => handleTabChange(index, tab)}
            >
              {tab.label}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export { SortBy };
