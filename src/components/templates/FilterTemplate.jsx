/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionIcon,
  AccordionItem,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  Text,
} from "@chakra-ui/react";

const FilterTemplate = ({ onOpen, onClose, btnRef, isOpen, children }) => {
  return (
    <>
      <Flex
        justifyContent="start"
        alignItems="center"
        gap="4"
        w={[400]}
        mt="3"
        pl="5"
      >
        <Text>Sort By:</Text>
        <Accordion allowToggle>
          <AccordionItem
            onClick={onOpen}
            ref={btnRef}
            border="2px solid black"
            rounded="md"
            p="1"
          >
            filters
            <AccordionIcon />
          </AccordionItem>
        </Accordion>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent>
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { FilterTemplate };
