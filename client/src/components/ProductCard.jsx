import { Link } from "react-router-dom"

function ProductCard({product}){ 
    return(
        <>
        <div className="flex flex-col border border-gray-300 pt-5 pb-6 px-5 rounded-xl hover:border-greenBucks hover:shadow-lg">
            <Link to={`/beverages/${product.id}`}>
                <img className="w-full" src={product.imgUrl} alt="" />
            </Link>
                <div className="mt-2 h-auto">
                    <p className=" font-medium text-black text-sm tracking-wide">{product.name}</p>
                    <p className=" font-light text-black text-xs tracking-wide">IDR {product.price}</p>
                </div>
        </div>
        </>
    )
}

export default ProductCard