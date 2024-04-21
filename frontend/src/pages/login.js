import { Button, Grid, Input } from "@mui/joy";
import axios from "axios";
import React, { useState } from "react";
import '../layouts/layout.css'
export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function sendLog() {
        try {
            const response = await axios.post("http://192.168.0.101:5000/api/log", {
                logText: username
            })
            alert(JSON.stringify(response));
        } catch (error) {
            alert(JSON.stringify(error));
        }

    }
    return (
        <>
            <Grid container gap={2} sx={{ flexGrow: 1 }}>
                <Grid xs={12}>
                    <Input placeholder="Type your username here.."
                        sx={{
                            '--Input-focusedInset': 'var(--any, )',
                            '--Input-focusedThickness': '0.15rem',
                            '--Input-focusedHighlight': '#fff',
                            '&::before': {
                                transition: 'box-shadow .15s ease-in-out',
                            },
                            '&:focus-within': {
                                borderColor: '#fff',
                            },
                        }}
                        size="sm" type="text" value={username} onChange={(evt) => setUsername(evt.target.value)} />
                </Grid>
                <Grid xs={12}>
                    <Input placeholder="Type your password here.."
                        sx={{
                            '--Input-focusedInset': 'var(--any, )',
                            '--Input-focusedThickness': '0.15rem',
                            '--Input-focusedHighlight': '#fff',
                            '&::before': {
                                transition: 'box-shadow .15s ease-in-out',
                            },
                            '&:focus-within': {
                                borderColor: '#fff',
                            },
                        }}
                        size="sm" type="password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                </Grid>
                <Grid xs={4} />
                <Grid xs={3}>
                    <Button onClick={sendLog} fullWidth="true">Logar</Button>
                </Grid>
                <Grid xs={4} />
            </Grid>
        </>
    );
}