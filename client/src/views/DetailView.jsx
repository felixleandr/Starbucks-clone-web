import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import { fetchBeveragesById } from "../store/actions/actionCreator";
import CardSkeleton from "../components/CardSkeleton";

function DetailView(){
    const {id} = useParams()
    const product = useSelector((state) => {
        return state.beverages.beverageById
    })
    const ingredient = useSelector((state) => {
        return state.ingredient.ingredientById
    })
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            setLoading(true)
            await dispatch(fetchBeveragesById(id))
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <section className="flex flex-col gap-3 pb-10 px-24">
                {loading && <CardSkeleton cards={1}/>}
                <div className="flex justify-between items-end">
                    <p className="block text-[42px]" >{product?.name}</p>
                    <p className="">Created by: {product?.User?.email}</p>
                </div>
                <div className="flex gap-4">
                    <img className="w-[70%]" src={product?.imgUrl} alt=""/>
                    <div className="flex flex-col bg-gray-900 px-5 py-5 gap-y-2 pr-16 w-full">
                        <div>
                            <p className="font-semibold text-xl text-greenBucks tracking-wider uppercase">price</p>
                            <div className="bg-greenBucks h-[1px]"></div>
                        </div>
                        <p className="text-white text-sm">IDR {product?.price}</p><br />
                        <div>
                            <p className="font-semibold text-xl text-greenBucks tracking-wider uppercase">category</p>
                            <div className="bg-greenBucks h-[1px]"></div>
                        </div>
                        <p className="text-white text-sm uppercase">{product?.Category?.name}</p><br />
                        <div>
                            <p className="font-semibold text-xl text-greenBucks tracking-wider uppercase">ingredients</p>
                            <div className="bg-greenBucks h-[1px]"></div>
                        </div>
                        {
                            product?.Ingredients?.map((el, idx) => {
                                return <p className="text-white text-sm font-semibold uppercase">{el.name}</p>
                            })
                        }
                        <br/>
                        <div>
                            <p className="font-semibold text-xl text-greenBucks tracking-wider uppercase">description</p>
                            <div className="bg-greenBucks h-[1px]"></div>
                        </div>
                        <p className="text-white text-sm text-left">{product?.description}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailView