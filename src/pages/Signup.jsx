import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../redux/action";
import { useDispatch } from "react-redux";

const Signup = ({ goToLogin }) => {
  const [state, setState] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password !== state.password2) {
      alert("Password Should match");
      return;
    }
    let newUser = {
      email: state.email,
      password: state.password,
    };
    dispatch(signupUser(newUser, goToLogin));
    console.log(newUser);
    alert("Signup Successful");
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <Box p="20px" mb={4}>
      <form onSubmit={handleSubmit}>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" onChange={handleChange} mb={4} />
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
        <FormControl id="password2">
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            name="password2"
            onChange={handleChange}
            mb={4}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Signup
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
