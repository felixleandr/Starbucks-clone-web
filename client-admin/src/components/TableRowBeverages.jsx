import { useDispatch } from "react-redux";
import { deleteBeverage } from "../store/actions/actionCreator";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function TableRowBeverages({beverage, idx}){
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
                dispatch(deleteBeverage(beverage.id))
                 Swal.fire(
                'Deleted!',
                'Sucessfully deleted.',
              )
            }
          })
    }
    return (
        <>
            <tr className="table-auto border border-gray-200 items-center justify-center content-center h-72">
                <td className="text-center">{idx + 1}</td>
                <td className="">{beverage?.name}</td>
                <td>
                    <img className="w-[350px]" src={beverage?.imgUrl} alt="" />
                </td>
                <td className="px-5 " >{beverage?.description}</td>
                <td className="px-5 ">
                    {beverage?.Ingredients?.map((el, idx) => {
                        return <p key={idx}>{el.name}</p>
                    })}
                    </td>
                <td className="text-center" >{beverage?.Category?.name}</td>
                <td>
                    <div className="grid place-content-center gap-1">
                        <Link to={`/edit-beverages/${beverage.id}`} className="underline hover:text-emerald-800 text-emerald-600 tracking-wide font-light">Edit</Link>

                        <button type="button" className="underline hover:text-red-600 text-red-500 tracking-wide font-light" 
                        onClick={handleDelete}>Delete</button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default TableRowBeverages