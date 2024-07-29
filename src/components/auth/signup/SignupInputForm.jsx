/* eslint-disable react/prop-types */
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { useCallback } from "react";

const SignupInputForm = ({
  signButtonLabel,
  input,
  handleInputChange,
  handleSignUp,
  error,
}) => {
  const getErrorMessage = useCallback(
    (field) => {
      const fieldErrors = error.filter((err) => err.path === field);
      if (fieldErrors.length > 0) {
        return <Text color="red">{fieldErrors[0].msg}</Text>;
      }
      return null;
    },
    [error]
  );

  return (
    <form onSubmit={handleSignUp}>
      <Stack gap="5">
        <Box>
          <Input
            variant="flushed"
            placeholder="Enter First Name"
            borderBottom="1px solid"
            borderColor="gray.400"
            value={input.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            name="firstName"
            px="4"
          />
          {getErrorMessage("firstName")}
        </Box>

        <Box>
          <Input
            variant="flushed"
            placeholder="Enter Last Name"
            borderBottom="1px solid"
            borderColor="gray.400"
            name="lastName"
            px="4"
            value={input.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
          {getErrorMessage("lastName")}
        </Box>

        <Box>
          <Input
            variant="flushed"
            px="4"
            placeholder="Enter Email"
            borderBottom="1px solid"
            borderColor="gray.400"
            type="email"
            name="email"
            value={input.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          {getErrorMessage("email")}
        </Box>

        <Box>
          <Input
            variant="flushed"
            placeholder="Enter password"
            borderBottom="1px solid"
            borderColor="gray.400"
            type="password"
            px="4"
            value={input.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            name="password"
          />
          {getErrorMessage("password")}
        </Box>

        <Button
          variant="solid"
          rounded="sm"
          colorScheme="orange"
          mt="10"
          w="100%"
          py="8"
          _hover={{}}
          fontWeight={900}
          type="submit"
        >
          {signButtonLabel}
        </Button>
      </Stack>
    </form>
  );
};

export { SignupInputForm };
