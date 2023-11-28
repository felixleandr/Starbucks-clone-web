import { Outlet } from "react-router"
import Sidebar from "../views/Sidebar"

function LayoutAdmin() {
    return(
        <>
        <div className="flex justify-center gap-4 px-24 py-10">
            <Sidebar/>
            <Outlet/>
        </div>
        </>
    )
}

export default LayoutAdmin