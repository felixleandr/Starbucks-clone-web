import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addCategory, editCategory, fetchCategoryById } from "../store/actions/actionCreator";
import { useLocation, useParams } from "react-router-dom";


function FormNewCat(){
    const {id} = useParams()
    const location = useLocation()
    const [category, setCategory] = useState('')
    const [currentPage, setCurrentPage] = useState('')

    const categoryById = useSelector((state) => {
        return state.categories.categoryById
    })

    const dispatch = useDispatch()

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            if(location.pathname === '/create-categories'){
                await dispatch(addCategory(category))
                Swal.fire({
                    icon: 'success',
                    title: `'${category}' added to categories list`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                  setCategory('')
            } else {
                console.log(category, 'asdf');
                await dispatch(editCategory(id, category))
                Swal.fire({
                    icon: 'success',
                    title: `'${category}' updated`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                setCategory('')
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.message,
              })
            console.log(err);
        }
    }

    const fetchData = async () => {
        try {
            await dispatch(fetchCategoryById(id))
        } catch (err) {
            console.log(err);
        } 
    }

    useEffect(()=> {
        fetchData()
    }, [id])

    useEffect(() => {
        if(location.pathname === '/create-categories') {
            setCurrentPage('add-cat-page')
            setCategory('')
        } else {
            setCurrentPage('edit-cat-page')
            setCategory(categoryById?.name || "")
        }
    }, [categoryById])


    return(
        <>
            <div className="flex flex-col w-[50%] gap-5 my-10">
                <div>
                    {
                        currentPage === 'add-cat-page' && <h1 className="text-3xl font-medium">Add New Categories</h1>
                    }
                    {
                        currentPage === 'edit-cat-page' && <h1 className="text-3xl font-medium">Edit New Categories</h1>
                    }
                    <div className="bg-greenBucks h-[2px] w-full"></div>
                </div>
                <div className="">
                    <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" id="" value={category}
                            onChange={(event) => {
                                setCategory(event.target.value)
                            }}
                            className="border px-2 py-1 rounded-md"/>
                        </div>
                        <button type="submit" className="bg-greenBucks text-white min-w-[200px] max-w-[250px] h-10 rounded-lg">Submit</button>
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default FormNewCat