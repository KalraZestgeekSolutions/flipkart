/* eslint-disable react/prop-types */
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const RemovePopUp = ({ itemId }) => {
  const { handleRemoveItem } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Button variant="none" fontSize="20" onClick={onOpen}>
        REMOVE
      </Button>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
      >
        <ModalOverlay />

        <ModalContent
          justifyContent="start"
          alignItems="start"
          display="flex"
          h="72"
          mx={{ base: 4, sm: 0 }}
          py="8"
        >
          <ModalCloseButton />
          <ModalHeader>Remove Item</ModalHeader>

          <ModalBody color="gray.400" fontWeight={600} fontSize={20}>
            Are you sure you want to remove this item?
          </ModalBody>

          <ModalFooter w="100%" pb="6">
            <Button
              bg="#2370f4"
              color="white"
              mr={3}
              onClick={() => handleRemoveItem(itemId)}
              px="6"
              py="8"
              w="100%"
              rounded={false}
              _hover={{}}
              fontWeight={800}
            >
              REMOVE
            </Button>
            <Button
              variant="outline"
              _hover={{ color: "#2370f4" }}
              color="black"
              px="6"
              py="8"
              w="100%"
              onClick={onClose}
              rounded={false}
              fontWeight={800}
            >
              CANCEL
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RemovePopUp;
