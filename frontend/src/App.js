import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import User from "./pages/user"
import Layout from "./layouts/layout";

function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         <Route element={<Layout />} >
           <Route path="/" element={<Home />} />
           <Route path="/user/:id" element={<User />} />
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App