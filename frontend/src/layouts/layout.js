import { Outlet } from "react-router-dom";
import './layout.css'

export default function Layout(){
    return (
        <div className="layoutClass">
            <h1>top menu</h1>
                <Outlet/>
            <h3>bottom menu</h3>
        </div>
    )
}