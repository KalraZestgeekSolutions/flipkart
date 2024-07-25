import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const useSignUpAuth = () => {
  const { route } = useParams();
  const [login, setLogin] = useState(true);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState([]);

  const SignUpUser = useCallback(async () => {
    try {
      const response = await axios.post(
        `https://flipakartworking.onrender.com/api/auth/signup`,
        {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          password: input.password,
        }
      );
      console.log(response);
      localStorage.setItem("signupResponse", JSON.stringify(response.data));
      navigate("/");
    } catch (err) {
      console.error(err);
      const errorsMsg = err.response.data.errors;
      setError(errorsMsg);
    }
  }, [input.firstName, input.lastName, input.email, input.password, navigate]);

  const handleInputChange = (name, value) => {
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    SignUpUser();
  };

  useEffect(() => {
    if (route) {
      setLogin(route !== "signup");
    }
  }, [route]);

  return {
    login,
    input,
    handleInputChange,
    handleSignUp,
    route,
    error,
  };
};
