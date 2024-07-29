import { Box, Button, Flex, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setMessage("Invalid email format.");
      return;
    }

    try {
      const response = await axios.post(
        `https://flipakartworking.onrender.com/api/password/forgot-password`,
        { email: email }
      );
      console.log(response);
      if (response.data.success) {
        setMessage("OTP sent to your email.");
      } else {
        setMessage("Failed to send OTP.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred.");
    }
  };

  const handleOTPSubmit = async () => {
    try {
      const response = await axios.post(
        `https://flipakartworking.onrender.com/api/password/verify-otp`,
        { email: email, otp: otp }
      );
      console.log(response);
      if (response.data.success) {
        setMessage("OTP Verified.");
      } else {
        setMessage("Invalid OTP.");
      }

      navigate("/newPassword");
    } catch (error) {
      console.error(error);
      setMessage("An error occurred.");
    }
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <form>
      <Flex
        w="100%"
        justifyContent="start"
        alignItems="center"
        py="20"
        h="89vh"
        direction="column"
        gap="10"
      >
        <Stack w="50%">
          <Box w="100%">
            <Input
              variant="flushed"
              placeholder="Enter your email"
              borderBottom="1px solid"
              borderColor="gray.400"
              name="email"
              px="4"
              value={email}
              onChange={handleEmailChange}
            />
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
            type="button"
            fontSize="2xl"
            onClick={handleEmailSubmit}
          >
            Verify Email
          </Button>
        </Stack>
        {message}
        <Stack w="50%">
          <Box>
            <Input
              variant="flushed"
              placeholder="Enter OTP"
              borderBottom="1px solid"
              borderColor="gray.400"
              name="otp"
              px="4"
              value={otp}
              onChange={handleOtpChange}
            />
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
            type="button"
            fontSize="2xl"
            onClick={handleOTPSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Flex>
    </form>
  );
};

export { Email };
