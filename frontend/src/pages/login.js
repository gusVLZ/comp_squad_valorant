import { Button, Grid, Input } from "@mui/joy";
import axios from "axios";
import React, { useState } from "react";
import "../style/layout.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function login() {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/UserLogin?username=${username}&password=${password}`
      );
      if (response.status === 200) {
        sessionStorage.setItem("id", response.data.id);
        return nav(`/home`);
      }

      alert(JSON.stringify(response));
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }
  return (
    <>
      <Grid container gap={2} sx={{ flexGrow: 1 }}>
        <Grid xs={12}>
          <Input
            placeholder="Type your username here.."
            sx={{
              "--Input-focusedInset": "var(--any, )",
              "--Input-focusedThickness": "0.15rem",
              "--Input-focusedHighlight": "#fff",
              "&::before": {
                transition: "box-shadow .15s ease-in-out",
              },
              "&:focus-within": {
                borderColor: "#fff",
              },
            }}
            size="sm"
            type="text"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <Input
            placeholder="Type your password here.."
            sx={{
              "--Input-focusedInset": "var(--any, )",
              "--Input-focusedThickness": "0.15rem",
              "--Input-focusedHighlight": "#fff",
              "&::before": {
                transition: "box-shadow .15s ease-in-out",
              },
              "&:focus-within": {
                borderColor: "#fff",
              },
            }}
            size="sm"
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </Grid>
        <Grid xs={4} />
        <Grid xs={3}>
          <Button onClick={login} fullWidth="true">
            Logar
          </Button>
        </Grid>
        <Grid xs={4} />
      </Grid>
    </>
  );
}
