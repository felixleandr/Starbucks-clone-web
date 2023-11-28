import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from './Footer'
 
function LayoutHome(){
    return(
        <>
            <Navbar />
            <Outlet/>
            <Footer/>
        </>
    )
}

export default LayoutHome