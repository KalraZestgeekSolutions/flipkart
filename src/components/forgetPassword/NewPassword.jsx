import { Box, Button, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleNewPassword = (e) => {
    e.preventDefault();
    setNewPassword(e.target.value);
  };

  const handleNewPasswordSubmit = async () => {
    try {
      const response = await axios.post(
        `https://flipakartworking.onrender.com/api/password/newPassword`,
        { newPassword: newPassword }
      );
      console.log(response);
      if (response.data.success) {
        setMessage("Password changed");
      } else {
        setMessage("Did not  change password");
      }

      navigate("/newPassword");
    } catch (error) {
      console.error(error);
      setMessage("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleNewPasswordSubmit}>
      <Flex
        w="100%"
        justifyContent="start"
        alignItems="center"
        py="10"
        h="89vh"
        direction="column"
        gap="10"
      >
        <Box w="50%">
          <Input
            variant="flushed"
            placeholder="Enter new password"
            borderBottom="1px solid"
            borderColor="gray.400"
            name="password"
            px="4"
            value={newPassword}
            onChange={handleNewPassword}
          />
        </Box>
        {message}
        <Button
          variant="solid"
          rounded="sm"
          colorScheme="orange"
          mt="10"
          w="50%"
          py="8"
          _hover={{}}
          fontWeight={900}
          type="submit"
          fontSize="2xl"
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export { NewPassword };
