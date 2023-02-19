import { authImage } from "@assets/index";
import { useAuthSign } from "@hooks/useAuthSign";
import {
  Box,
  Button,
  FormControl,
  FormControlProps,
  TextField,
} from "@mui/material";
import { redirect, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { app } from "src/firebase";
import styled from "styled-components";

export const AuthPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth(app);
  const navigate = useNavigate()

  const formHandler = async (e: any) => {
    console.log(email);
    e.preventDefault();
    const user = await useAuthSign({ auth, email, password });
    navigate('/')
};


  return (
    <FormWrapper>
      <Box className="auth-left">
        <Box component="img" src={authImage} />
      </Box>
      <FormControl className="auth-right">
        <TextField
          className="auth-right_input"
          id="standard-search"
          label="Email"
          type="email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="auth-right_input"
          id="standard-search"
          label="Password"
          type="password"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box className="auth-right_btns">
          <Button onClick={formHandler} className="auth-right_btn" type="submit" variant="outlined">
            Sign In
          </Button>
          <Button className="auth-right_btn_2">Log In</Button>
        </Box>
      </FormControl>
    </FormWrapper>
  );
};

const FormWrapper = styled(Box)`
  display: flex;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  .auth-left {
    img {
      max-width: 600px;
    }
  }
  .auth-right {
    &_input {
      min-width: 300px;
      margin-top: 20px;
    }
    &_btns {
      margin-top: 28px;
      display: flex;
      justify-content: start;
      gap: 15px;
      align-items: center;
      color: black;
    }
    &_btn {
      max-width: 200px;
      border: 1px solid black;
      color: black;
      &_2 {
        color: gray;
      }
    }
  }
`;
