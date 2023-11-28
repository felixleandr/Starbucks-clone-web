import Skeleton from "react-loading-skeleton";

function CardSkeleton ({cards}){
    return(
        <>
        {Array(cards).fill(0).map((el, idx) =>     
            <div className="flex flex-col border border-gray-300 pt-5 pb-6 px-5 rounded-xl" key={idx}>
                <Skeleton count={1} containerClassName="w[335px]" height={410} style={{marginBottom: ".3rem"}}/>
                <div className="mt-2 h-auto">
                <Skeleton count={2} containerClassName="w[335px]"/>
                </div>
            </div>)
        }
        </>
    )
}

export default CardSkeleton