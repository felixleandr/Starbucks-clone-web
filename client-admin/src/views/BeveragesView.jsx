import { useState, useEffect } from "react"
import TableRowBeverages from "../components/TableRowBeverages";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeverages } from "../store/actions/actionCreator";
import { Link } from "react-router-dom";



function BeveragesView(){
    
    const beverages = useSelector((state) => {
        return state.beverages.beverages;
    })

    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            await dispatch(fetchBeverages())
        } catch (err) {
            console.log(err);
        } 
    }

    useEffect(() => {
        fetchData()
    }, []);
    return(
        <>
            <div className="flex flex-col gap-3 ml-[250px]">
                <button className="bg-greenBucks px-2 py-2 w-[200px] text-white rounded-lg">
                    <Link to={"/create-beverages"}>
                    + Add New Beverages
                    </Link>
                    </button>
                <table className="table-auto min-w-[900px] max-w-[1200px] bg-white border-gray-200 rounded-f shadow-black border px-40">
                    <thead className="text-xs text-gray-700 uppercase border">
                        <th scope="col" className="px-6 py-3">No</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Image</th>
                        <th scope="col" className="px-6 py-3">Description</th>
                        <th scope="col" className="px-6 py-3">Ingredients</th>
                        <th scope="col" className="px-6 py-3">Category</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </thead>
                    <tbody className="">
                        {beverages.map((beverage, idx) => {
                            return <TableRowBeverages key={idx} beverage={beverage} idx={idx}/>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BeveragesView