import { Outlet } from "react-router-dom";
import './layout.css'

export default function Layout() {
    return (
        <div className="layoutClass" style={{ width: "50vh" }}>
            <h1 className="h1TopMenu">Comp Squad Val</h1>
            <h2 className="h2TopMenu">Login</h2>
            <Outlet />
            <h3>bottom menu</h3>
        </div>
    )
}