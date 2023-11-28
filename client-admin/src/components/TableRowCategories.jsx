import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteCategory } from "../store/actions/actionCreator"

function TableRowCategories({category}){

    const dispatch = useDispatch()

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteCategory(category.id))
                 Swal.fire(
                'Deleted!',
                'Sucessfully deleted.',
              )
            }
          })
    }

    return(
        <>
            <tr className="border py-5 h-16">
                <td className="text-center">{category.id}</td>
                <td className="text-left" >{category.name}</td>
                <td>
                    <div className="flex justify-evenly">
                        <Link to={`/edit-categories/${category.id}`} className="underline hover:text-emerald-800 text-emerald-600 tracking-wide font-light">Edit</Link>
                        <button className="underline hover:text-red-600 text-red-500 tracking-wide font-light" onClick={handleDelete}>Delete</button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default TableRowCategories