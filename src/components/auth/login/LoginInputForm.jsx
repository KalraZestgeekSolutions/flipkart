import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useCallback } from "react";

const LoginInputForm = ({
  loginButtonLabel,
  handleLoginInputChange,
  handleLoginUser,
  loginCredentials,
  loginError,
}) => {
  const getErrorMessage = useCallback(
    (field) => {
      const fieldErrors = loginError?.filter((err) => err.path === field);
      if (fieldErrors?.length > 0) {
        return <Text color="red">{fieldErrors[0].msg}</Text>;
      }
      return null;
    },
    [loginError]
  );

  return (
    <form onSubmit={handleLoginUser}>
      <Stack gap="6">
        <Input
          variant="flushed"
          placeholder="Enter Email/Mobile number"
          borderBottom="1px solid"
          borderColor="gray.400"
          name="email"
          value={loginCredentials.email}
          onChange={(e) => handleLoginInputChange("email", e.target.value)}
        />
        {getErrorMessage("email")}

        <Input
          variant="flushed"
          placeholder="Enter Password"
          borderBottom="1px solid"
          borderColor="gray.400"
          type="password"
          name="password"
          value={loginCredentials.password}
          onChange={(e) => handleLoginInputChange("password", e.target.value)}
        />
        {getErrorMessage("password")}
      </Stack>
      <Button
        type="submit"
        variant="solid"
        rounded="sm"
        colorScheme="orange"
        mt="10"
        w="100%"
        py="8"
        _hover={{}}
        fontWeight={900}
      >
        {loginButtonLabel}
      </Button>
    </form>
  );
};

export default LoginInputForm;
