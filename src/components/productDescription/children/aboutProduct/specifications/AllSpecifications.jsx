/* eslint-disable react/prop-types */
import { Box, Button, Collapse, Divider } from "@chakra-ui/react";
import Specifications from "./SpecificationsFunctions";

const AllSpecifications = ({ product, onToggle, isOpen }) => {
  return (
    <Box
      mt="12"
      border="1px solid"
      borderColor="gray.200"
      w="100%"
      pb="12"
      direction={"column"}
    >
      <Box
        p="6"
        role="button"
        fontSize="2xl"
        borderBottom="1px"
        onClick={onToggle}
        borderColor="gray.200"
      >
        Specifications
      </Box>
      <Box fontWeight={500}>
        <Specifications product={product} section={"General"} />
        <Divider my="6" />

        <Box
          position="relative"
          display={isOpen ? "none" : "unset"}
          py="1"
          h="16%"
          maxW="100vw"
          alignItems="center"
          justifyContent="start"
          bg="white"
        >
          <Button
            position="absolute"
            rounded={false}
            bg="white"
            variant="none"
            color="#2370f4"
            onClick={onToggle}
            alignItems="center"
            justifyContent="start"
          >
            Read More
          </Button>
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <Specifications
            product={product}
            section={"Print"}
            keysToDisplay={["Max_Print_Resolution_(Mono)", "Print_Speed_Mono"]}
          />
          <Divider my="6" />

          <Specifications
            product={product}
            section={"Paper_Handling"}
            keysToDisplay={["Borderless_printing", "Media_size_supported"]}
          />
          <Divider my="6" />
          <Specifications product={product} section={"Dimensions_And_Weight"} />
          <Divider my="6" />

          <Specifications product={product} section={"Connectivity"} />

          <Divider my="6" />

          <Specifications
            product={product}
            section={"Compatible_Inks/toners"}
            keysToDisplay={["Compatible_Black_cartridge"]}
          />
          <Divider my="6" />

          <Specifications product={product} section={"Sales_Package"} />
        </Collapse>
      </Box>
    </Box>
  );
};

export { AllSpecifications };
