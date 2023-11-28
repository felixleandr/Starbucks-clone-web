import { useEffect, useState } from "react"
import TableRowCategories from "../components/TableRowCategories"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../store/actions/actionCreator"
import { Link } from "react-router-dom"


function CategoriesView(){
    const categories = useSelector((state) => {
        return state.categories.categories
    })
    console.log(categories);

    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            await dispatch(fetchCategories())
        } catch (err) {
            console.log(err);
        } 
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
            <div className="flex flex-col gap-3 ml-[150px]">
                <button className="bg-greenBucks px-2 py-2 w-[200px] text-white rounded-lg">
                    <Link to={'/create-categories'}>
                    + Add New Categories
                    </Link>
                    </button>
                <table className="table-auto min-w-[900px] max-w-[1200px] bg-white border-gray-200 rounded-f shadow-black border gap-10 px-40">
                    <thead className="text-xs text-gray-700 uppercase">
                        <th scope="col" className="px-6 py-3">No</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </thead>
                    <tbody>
                        {
                            categories.map((category, idx) => {
                                return <TableRowCategories key={idx} category={category}/>
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CategoriesView