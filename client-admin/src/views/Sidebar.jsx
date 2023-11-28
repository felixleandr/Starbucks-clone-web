import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";


function Sidebar () {
    const nav = useNavigate()
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you leaving?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear()
                nav('/login')
                 Swal.fire(
                'You have been logged out',
              )
            }
          })
    }

    return (
        <>
            <div className="h-screen w-[300px] bg-greenBucks fixed left-0 top-0">
                <div className="flex flex-col py-7 gap-10">
                    <div className="w-full items-center justify-center flex">
                        <img className="w-[60px] content-center hover:animate-bounce" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-5 items-start px-5">
                        <div className="flex flex-col items-start w-full hover:font-bold">
                            <Link to="/beverages" className="text-white text-xl ">Beverages</Link>
                            <div className="bg-white h-[1px] w-full"></div>
                        </div>
                        <div className="flex flex-col items-start w-full hover:font-bold">
                            <Link to="/categories" className="text-white text-xl">Categories</Link>
                            <div className="bg-white h-[1px] w-full"></div>
                        </div>
                        <div className="flex flex-col items-start w-full hover:font-bold">
                            <Link to="/create-admin" className="text-white text-xl">Register</Link>
                            <div className="bg-white h-[1px] w-full"></div>
                        </div><br />
                        <button href="" className="text-white text-xl hover:font-bold" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar