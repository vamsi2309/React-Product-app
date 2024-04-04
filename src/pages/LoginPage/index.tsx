import React, { useState } from "react";
import {
  Container,
  Input,
  InnerContainer,
  Button,
  InputBox,
} from "./login.style";
import axiosInstance from "../../services";
import { useMutation } from "react-query";
import { dispatch } from "../../store";
import { setUserLogin } from "../../store/slice/userLogin";

interface Data {
  username: string;
  password: string;
}

function Login() {
  const initialCredentials: Data = {
    username: "",
    password: "",
  };
  const [loginDetails, setLoginDetails] = useState<Data>(initialCredentials);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };
  const postApi = async (user: Data) => {
    const headers = {
      "Content-Type": "application/json",
    };

    return axiosInstance.post("/auth/login", user, { headers });
  };
  const { mutate } = useMutation(postApi, {
    onSuccess: () => {
      dispatch(setUserLogin(true));
    },
  });

  const onClickhandle = () => {
    mutate(loginDetails);
    setLoginDetails(initialCredentials);
  };

  return (
    <Container>
      <InnerContainer>
        <Input>
          <h1>LOGIN</h1>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={loginDetails.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={loginDetails.password}
            onChange={handleChange}
          />
          <Button onClick={onClickhandle}>Submit</Button>
        </Input>
      </InnerContainer>
    </Container>
  );
}
export default Login;
