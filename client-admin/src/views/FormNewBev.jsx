import { useDispatch, useSelector } from "react-redux"
import { addBeverage, editBeverage, fetchBeveragesById, fetchCategories, fetchIngredients } from "../store/actions/actionCreator";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";


function FormNewBev(){
    const categories = useSelector((state) => {
        return state.categories.categories
    })
    const ingredients = useSelector((state) => {
        return state.ingredient.ingredients
    })

    const beverageById = useSelector((state) => {
        return state.beverages.beverageById
    })


    const [formBev, setFormBev] = useState({
        name: '',
        CategoryId: '',
        price: '',
        imgUrl: '',
        description: '',
        inputIngredients: [
        {
            inputIngredients:''
        },
        {
            inputIngredients:''
        },
        {
            inputIngredients:''
        }]
    })

    const [currentPage, setCurrentPage] = useState('')
    const location = useLocation()

    const dispatch = useDispatch();
    const nav = useNavigate()

    const handleIngredientInput = (event, idx) => {
        const {name, value } = event.target;
        let newInput = [...formBev.inputIngredients]
        newInput[idx].inputIngredients = value
        setFormBev({
            ...formBev,
            inputIngredients: [...formBev.inputIngredients]
        })
    }



    const fetchData = async () => {
        try {
            await dispatch(fetchCategories())
            await dispatch(fetchIngredients())
            await dispatch(fetchBeveragesById(id))
        } catch (err) {
            console.log(err);
        } 
    }

    const {id} = useParams()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            if(location.pathname === '/create-beverages'){
                await dispatch(addBeverage(formBev))
                Swal.fire({
                    icon: 'success',
                    title: 'Succesfully added to menu',
                    showConfirmButton: false,
                    timer: 1500
                  })
                nav('/beverages')
            } else {
                await dispatch(editBeverage(id, formBev))
                Swal.fire({
                    icon: 'success',
                    title: 'Menu sucessfully updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
                nav('/beverages')
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

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchData()
    }, [id])

    useEffect(() => {
        if(location.pathname === '/create-beverages'){
            setCurrentPage('add-bev-page')
            setFormBev({
                name: '',
                CategoryId: '',
                price: '',
                imgUrl: '',
                description: '',
                inputIngredients: [
                {
                    inputIngredients:''
                },
                {
                    inputIngredients:''
                },
                {
                    inputIngredients:''
                }]
            })
        } else {
            setCurrentPage('edit-bev-page')
            setFormBev({
                name: beverageById?.name || "",
                CategoryId: beverageById?.CategoryId || "",
                price: beverageById?.price || "",
                imgUrl: beverageById?.imgUrl || "",
                description: beverageById?.description || "",
            })

        }
    }, [beverageById])

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormBev({
            ...formBev,
            [name]: value
        })

    }

    return(
        <>
            <div className="flex flex-col w-[50%] gap-5 my-10">
                
                <div>
                    {
                        currentPage === 'add-bev-page' && <h1 className="text-3xl font-medium">Add New Beverage</h1>
                    }
                    {
                        currentPage === 'edit-bev-page' && <h1 className="text-3xl font-medium">Edit New Beverage</h1>
                    }
                    <div className="bg-greenBucks h-[2px] w-full"></div>
                </div>
                <div className="">
                    <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" id="" value={formBev.name} className="border px-2 py-1 rounded-md" onChange={handleChange}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Category</label>
                            <select name="CategoryId" id="" value={formBev.CategoryId} className="border px-2 py-1 rounded-md" onChange={handleChange}>
                                <option value="" className="disabled:">---Select---</option>
                                {categories.map(el => {
                                    return <option value={el.id}>{el.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Price</label>
                            <input type="text" name="price" id="" value={formBev.price} onChange={handleChange} className="border px-2 py-1 rounded-md"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Image Url</label>
                            <input type="text" name="imgUrl" id="" value={formBev.imgUrl} onChange={handleChange} className="border px-2 py-1 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Description</label>
                            <textarea className="border px-2 py-1 rounded-md" value={formBev.description} onChange={handleChange} name="description"></textarea>
                        </div>
                        <div className="flex flex-col gap-2">

                            {
                                currentPage === 'add-bev-page' &&  <div className="flex flex-col gap-2">
                                <label htmlFor="">Ingredients</label>
                                <select name="inputIngredients" id="" value={formBev.inputIngredients[0].inputIngredients} className="border border-gray-200 px-2 py-1" onChange={(event) => {handleIngredientInput(event,0)}}>
                                    <option value="" className="disabled:">---Select---</option>
                                    {ingredients.map(el => {
                                        return <option value={el.id}>{el.name}</option>
                                    })}
                                </select>
                                <select name="inputIngredients" id="" className="border border-gray-200 px-2 py-1" onChange={(event) => {handleIngredientInput(event,1)}}>
                                    <option value={formBev.inputIngredients[1].inputIngredients} className="disabled:">---Select---</option>
                                    {ingredients.map(el => {
                                        return <option value={el.id}>{el.name}</option>
                                    })}
                                </select>
                                <select name="inputIngredients" id="" className="border border-gray-200 px-2 py-1" onChange={(event) => {handleIngredientInput(event,2)}}>
                                    <option value={formBev.inputIngredients[2].inputIngredients} className="disabled:">---Select---</option>
                                    {ingredients.map(el => {
                                        return <option value={el.id}>{el.name}</option>
                                    })}
                                </select>
                                </div>
                            }
                           
                            {/* <a type="button" onClick={handleAddInput}>Add Ingredients</a> */}
                        </div>
                        <div className="">
                            <button type="submit" className="bg-greenBucks text-white min-w-[200px] max-w-[250px] h-10 rounded-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default FormNewBev