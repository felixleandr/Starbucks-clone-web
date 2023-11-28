import {BiLogoInstagram} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {BiLogoFacebookSquare} from 'react-icons/bi'
function Footer(){
    return (
        <>
            <footer>
                <div className="min-h-[100px] bg-greyFooter flex gap-4 px-24 items-center">
                    <BiLogoInstagram style={{fontSize: '30px'}}/> <BiLogoTwitter style={{fontSize: '30px'}}/> <BiLogoFacebookSquare style={{fontSize: '30px'}}/>

                </div>
                <div className="flex justify-between bg-lightGreyFooter px-24 py-5">
                    <div className="flex justify-between gap-6">
                        <div className="flex flex-col min-w-[150px] gap-1">
                            <h1 className="mb-1 font-semibold text-greenBucks">ABOUT US</h1>
                            <a href="" className="font-light text-sm">Our Heritage</a>
                            <a href="" className="font-light text-sm">Presroom</a>
                            <a href="" className="font-light text-sm">Our Company</a>
                            <a href="" className="font-light text-sm">Career Center</a>
                            <a href="" className="font-light text-sm">Newsroom</a>
                        </div>
                        <div className="flex flex-col min-w-[200px] gap-1">
                            <h1 className="font-semibold text-greenBucks">CUSTOMER SERVICE</h1>
                            <a href="" className="font-light text-sm">Frequently Asked Questions</a>
                        </div>
                        <div className="flex flex-col min-w-[180px] gap-1">
                            <h1 className="font-semibold text-greenBucks">QUICK LINKS</h1>
                            <a href="" className="font-light text-sm">Store Locator</a>
                            <a href="" className="font-light text-sm">For Partners</a>
                        </div>
                    </div>
                    <div>
                        <img className="h-[120px]" src="https://www.starbucks.co.id/image/wordmark_footer.png" alt="" />
                    </div>
                </div>
                <div className="px-24 py-5 bg-lightGreyFooter flex flex-col gap-1">
                    <div className="flex gap-5 ">
                        <a href="" className='text-greenBucks'>Privacy Statement</a>
                        <p>|</p>
                        <a href="" className='text-greenBucks'>Terms of use</a>
                        <p>|</p>
                        <a href="" className='text-greenBucks'>Site Map</a>
                        <p>|</p>
                        <a href="" className='text-greenBucks'>Cookie Preferences</a>
                    </div>
                    <p className="text-sm font-light">2023 Starbucks Coffee Company, All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer