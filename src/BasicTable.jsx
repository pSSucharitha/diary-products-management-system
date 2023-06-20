
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup, Container } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BasicTable() {
  const [users, setUsers] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await axios.get("http://localhost:8080/getUsers");
    setUsers(users.data);
    console.log(users.data);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:8080/deleteUser/${id}`);
    loadUsers();
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">User ID</TableCell>
              <TableCell align="left">User Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.emailId}</TableCell>
                <TableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button variant="outLined" href="/BasicTable">View</Button>
                    <a href={`/UpdateUser/${user.id}`}>
                      <Button color='success'>Update</Button>
                    </a>

                    {/* <a href={`/DeleteUser/${user.id}`}> */}
                    <Button
                      style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                      color="error"
                      onClick={()=>deleteUsers(user.id)}
                      href="/BasicTable"
                     
                    >
                      Delete
                    </Button>
                    {/* </a> */}
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" href="/Home" style={{borderRadius:20}}>Enter</Button>
      <Button variant="contained" href="/SignUp" style={{borderRadius:20}}>Add User</Button>

    </Container>
  );
}

