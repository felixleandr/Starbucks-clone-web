import {Link} from 'react-router-dom'
import {ImLocation} from 'react-icons/im'

function Navbar(){

    return (
        <>
            <div className="flex flex-col mb-2 border border-gray-200 pb-5 drop-shadow-md">
                <div className="min-h-[10px] h-[10px] w-full bg-greenBucks"></div>
                <div className="min-h-[70px] flex justify-around items-end align-middle">
                    <div>
                        <Link to="/">
                            <img className="w-[45px]" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="" />
                        </Link>
                    </div>
                    <div className="h-6">
                        <ul className="list-none flex gap-7 justify-center h-[44px]">
                            <li className='h-full'><a href="" className='hover:underline hover:text-greenBucks'>Coffee</a></li>
                            <Link className='hover:underline hover:text-greenBucks' to="/beverages">Menu</Link>
                            <li className='hover:underline hover:text-greenBucks'>Coffeehouse</li>
                            <li className='hover:underline hover:text-greenBucks'>Responsibility</li>
                            <li className='hover:underline hover:text-greenBucks'>Starbucks Rewards</li>
                            <li className='hover:underline hover:text-greenBucks'>Dewata</li>
                            <li className='hover:underline hover:text-greenBucks'>About Us</li>
                        </ul>
                    </div>
                    <div className='flex gap-2 justify-end items-center hover:animate-bounce'>
                        <ImLocation style={{color: 'green'}} className='hover:animate-bounce'/>Find A Store
                    </div>
                </div>    
            </div>
        </>
    )
}

export default Navbar