import React, { useState } from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

const AccountPage = () => {
  const [login, setLogin] = useState(true);

  const handleChange = ()=>{
    setLogin(!login)
  }
  const goToLogin = ()=>{
    setLogin(true)
  }

  return (
    <Box w="50%" m="auto"  pb={4} bg={'white'} borderRadius={'15px'}>
        <Box py={4}>
      {login ? <Heading>Login form</Heading> : <Heading>Signup form</Heading>}
      </Box>
      <Flex align={'center'} justify={'center'} mt={4}>
        <Button colorScheme={login? "teal":null} onClick={handleChange} borderRadius={'8px 0px 0px 8px'}>Login</Button>
        <Button colorScheme={login? null: "teal"} onClick={handleChange}  borderRadius={'0px 8px 8px 0px'} >Signup</Button>
      </Flex>
      {login ? <Login /> : <Signup goToLogin={handleChange}/>}
    </Box>
  );
};

export default AccountPage;
