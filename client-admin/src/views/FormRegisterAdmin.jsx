import { useState } from "react"
import { register } from "../store/actions/actionCreator"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function FormRegisterAdmin(){
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const nav = useNavigate()

    const handleChange = (event) => {
        const {name, value} = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleRegister = async (event) => {
        event.preventDefault()
        try {
            await dispatch(register(form))
            Swal.fire({
                icon: 'success',
                title: 'Admin Registered',
                showConfirmButton: false,
                timer: 1500
              })
            nav('/create-admin')
            setForm({
                email: '',
                password: ''
            })
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.message,
              })
            console.log(err);
        } 
    }

    return(
        <>
            <div className="flex flex-col w-[50%] gap-5 my-10">
                <div>
                    <h1 className="text-3xl font-medium">Add New Admin</h1>
                    <div className="bg-greenBucks h-[2px] w-full"></div>
                </div>
                <div className="">
                    <form action="" onSubmit={handleRegister} className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="">Email</label>
                            <input type="text" name="email" id="" value={form.email} onChange={handleChange} className="border px-2 py-1 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" value={form.password} onChange={handleChange} id="" className="border px-2 py-1 rounded-md"/>
                        </div>
                        <button type="submit" className="bg-greenBucks text-white min-w-[200px] max-w-[250px] h-10 rounded-lg">Submit</button>
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default FormRegisterAdmin