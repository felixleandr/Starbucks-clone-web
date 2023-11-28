import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import {useDispatch, useSelector} from 'react-redux'
import { fetchBeverages, bevFetchSuccess } from "../store/actions/actionCreator"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import CardSkeleton from '../components/CardSkeleton'

function MenuView(){

    const products = useSelector((state) => {
        return state.beverages.beverages;
    })

    const [loading, setLoading] = useState(true)

    console.log(products);
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            setLoading(true)
            await dispatch(fetchBeverages())
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return(
        <>
        <h1 className="text-3xl pl-24 pt-2" >Beverages</h1>
        <div className="flex flex-col justify-center items-center">
            <div className="mx-8 grid grid-cols-3 gap-5 my-5 w-[1270px] flex-wrap">

                {loading && <CardSkeleton cards={products.length}/> }

                {!loading && products.map((product, idx) => {
                    return <ProductCard key={idx} product={product}/>
                })
                }

            </div>
        </div>
        </>
    )
}

export default MenuView