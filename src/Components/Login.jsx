import { PasswordSharp } from "@mui/icons-material";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <span style={{ fontSize: "30px", margin: "10px" }}>Login</span>
            <br />
            <br />
            <TextField
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              fullWidth
              label="Email id"
            />
            <br />
            <br />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              fullWidth
              label="password"
              value={password}
            />
            <br />
            <br />
            <Button variant="contained" fullWidth>
              Login
            </Button>
            <br />
            <br />
            <Button variant="contained" fullWidth color="warning">
              Cancel
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
