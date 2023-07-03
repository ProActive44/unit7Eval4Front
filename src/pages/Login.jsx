import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/action";
import { useDispatch } from "react-redux";

const Login = () => {
  const [state, setState] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(state, navigate))
    
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <Box p="20px">
      <form onSubmit={handleSubmit}>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={state?.email}
            onChange={handleChange}
            mb={4}
            required
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            mb={4}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
