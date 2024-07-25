import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginAuth = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState([]);
  const navigate = useNavigate();
  const loginUser = useCallback(async () => {
    try {
      const response = await axios.post(
        `https://flipakartworking.onrender.com/api/auth/login`,
        {
          email: loginCredentials.email,
          password: loginCredentials.password,
        }
      );
      console.log("Login", response);
      localStorage.setItem("loginResponse", JSON.stringify(response.data));
      navigate("/");
    } catch (err) {
      console.error(err);
      const errorsMsg = err.response.data.errors;
      console.log(errorsMsg);
      setLoginError(errorsMsg);
    }
  }, [loginCredentials.email, loginCredentials.password, navigate]);

  const handleLoginInputChange = (name, value) => {
    setLoginCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    loginUser();
  };

  return {
    loginCredentials,
    handleLoginInputChange,
    handleLoginUser,
    loginError,
  };
};
