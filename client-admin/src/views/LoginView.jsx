import { useEffect, useState } from "react"
import { login } from "../store/actions/actionCreator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


function LoginView (){
    const [input, setInput] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch()
    const nav = useNavigate()

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            await dispatch(login(input))
            nav('/beverages')
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.message,
              })
            console.log(err);
        } 
    }


    return (
    <>
    <section className="flex justify-center h-screen items-center ">
        <div className=" border border-greenBucks bg-gray-200 shadow-2xl flex flex-col rounded-xl min-h-[400px] items-center w-[500px] h-[500px] justify-evenly ">
            <div className="">
                <img className="w-[200px]" src="https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Emblem.png" alt="" />
            </div>
            <div className="flex flex-col gap-5 w-[80%]">
                <div>
                    <p className="font-semibold text-xl tracking-wide text-gray-800">Sign In</p>
                    <div className="bg-greenBucks h-[2px]"></div>
                </div>
                <form action="" className="gap-3 flex flex-col" onSubmit={handleLogin}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="pl-1 font-normal text-base text-gray-800 text-left">Email</label>
                        <input className="border border-gray-800 bg-gray-200 text-gray-800 rounded-xl px-2 py-2 font-normal text-sm" type="text" name="email" id="" value={input.email} onChange={handleChange}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="pl-1 font-normal text-base text-gray-800 text-left">Password</label>
                        <input className="border border-gray-800 bg-gray-200 text-gray-800 rounded-xl px-2 py-2 font-normal text-sm" type="password"  name="password" value={input.password} onChange={handleChange}/>
                    </div>
                    <button className="border-none w-full h-10 mt-4 rounded-xl bg-greenBucks text-gray-200">Sign in</button>
                </form>
            </div>
        </div>
    </section>
    </>

    ) 
}

export default LoginView