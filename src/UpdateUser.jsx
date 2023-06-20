
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {

     const navigate=useNavigate();
     


  const { id } = useParams();

  const [userData, setUserData] = useState({
    NAME: "",
    GMAIL: "",
    PASSWORD:"",
  });

  const {NAME, GMAIL,PASSWORD } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };
    useEffect(() => {
    loadData();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.put(`http://localhost:8080/loginpost`, userData);
    navigate("/BasicTable");
  };

  const loadData = async (e) => {
    const result = await axios.get(`http://localhost:8080/loginget`);
    setUserData(result.data);
  };

  return (
    <Container align="center">
      <Box>
        <h1>Update!</h1>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="NAME"
              name="NAME"
              value={NAME}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="GMAIL"
              name="GMAIL"
              value={GMAIL}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="PASSWORD"
              name="PASSWORD"
              value={PASSWORD}
              onChange={handleData}
            />
           <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained" >
                Add User
              </Button>
              <Button  color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default UpdateUser;
