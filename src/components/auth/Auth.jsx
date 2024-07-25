import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginInputForm from "../auth/login/LoginInputForm";
import SignupInputForm from "../auth/signup/SignupInputForm";
import * as auth from "../../constants/AuthConstants";
import AuthLeftCard from "../auth/childrens/AuthLeftCard";
import { useSignUpAuth } from "../../hooks/useSignUpAuth";
import { useLoginAuth } from "../../hooks/useLoginAuth";

export const Authentication = () => {
  const { login, input, handleInputChange, handleSignUp, route, error } =
    useSignUpAuth();
  const {
    loginCredentials,
    handleLoginInputChange,
    handleLoginUser,
    loginError,
  } = useLoginAuth();

  const { signUpTitle, signDescription1, signDescription2, signButtonLabel } =
    auth.signUpConstants;
  const { loginTitle, loginDescription1, loginDescription2, loginButtonLabel } =
    auth.loginConstants;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      px={{ base: 12, sm: 8, md: 16, xl: 56 }}
      py="5"
      bg="gray.100"
    >
      <Card
        direction={{ base: "column", sm: "row" }}
        minH="90vh"
        rounded={false}
        w="100%"
      >
        {route === "login" ? (
          <AuthLeftCard
            title={loginTitle}
            description1={loginDescription1}
            description2={loginDescription2}
          />
        ) : (
          <AuthLeftCard
            title={signUpTitle}
            description1={signDescription1}
            description2={signDescription2}
          />
        )}

        <Stack w="100%" px="2" py="14">
          <CardBody>
            {route === "login" ? (
              <LoginInputForm
                loginButtonLabel={loginButtonLabel}
                loginCredentials={loginCredentials}
                handleLoginInputChange={handleLoginInputChange}
                handleLoginUser={handleLoginUser}
                loginError={loginError}
              />
            ) : (
              <SignupInputForm
                signButtonLabel={signButtonLabel}
                input={input}
                handleInputChange={handleInputChange}
                handleSignUp={handleSignUp}
                error={error}
              />
            )}
          </CardBody>
          <CardFooter
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="100%"
          >
            {login ? (
              <Link to="/auth/signup">
                <Button
                  color="#2874f0"
                  fontWeight={700}
                  _hover={{}}
                  fontSize="lg"
                  bg="transparent"
                >
                  New to Flipkart? Create an account
                </Button>
              </Link>
            ) : (
              <Link
                to="/auth/login"
                color="#2874f0"
                fontWeight={700}
                _hover={{}}
                fontSize="lg"
              >
                <Button
                  color="#2874f0"
                  fontWeight={700}
                  _hover={{}}
                  fontSize="lg"
                  bg="transparent"
                >
                  Existing User? Log in
                </Button>
              </Link>
            )}
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
};
