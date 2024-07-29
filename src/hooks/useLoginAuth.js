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
      localStorage.setItem("loginResponse", JSON.stringify(response.data));
      navigate("/");
    } catch (err) {
      const errorsMsg = err.response.data.errors;
      setLoginError(errorsMsg);
    }
  }, [loginCredentials.email, loginCredentials.password, navigate]);

  const handleLoginInputChange = useCallback((name, value) => {
    setLoginCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleLoginUser = useCallback(
    (e) => {
      e.preventDefault();
      loginUser();
    },
    [loginUser]
  );

  return {
    loginCredentials,
    handleLoginInputChange,
    handleLoginUser,
    loginError,
  };
};
