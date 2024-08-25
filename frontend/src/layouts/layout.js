import { Outlet } from "react-router-dom";
import '../style/layout.css'
import { useState } from "react";
import MainPage from "./mainPage";

export default function Layout() {
    const [logged, setLogged] = useState(false)

    return (
        !logged?(
            <div className="layoutClass" style={{ width: "min(50vh, 96vw)" }}>
                <h1 className="h1TopMenu">Comp Squad Val</h1>
                <h2 className="h2TopMenu" onClick={() => setLogged(true)}>Login</h2>
                <Outlet />
            </div>
        ):(
            <MainPage/>
        )
    )
}