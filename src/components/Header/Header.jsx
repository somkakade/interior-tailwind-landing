
import { FaInstagram, FaRegUser, FaShoppingCart } from "react-icons/fa"
import BannerImage from "../../../src/assets/bg.jpg"
import { CiShoppingCart } from "react-icons/ci"

const Header = () => {
    return (
        <header className='bg-white shadow-lg py-4 h-screen w-full relative overflow-x-hidden' style={{ backgroundImage: `url(${BannerImage})` }}>
            <nav>
                <div className="container h-full">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="#" className="text-white font-bold text-4xl">Interior.</a>
                        </div>
                        <div>
                            <ul className="text-white hidden lg:flex gap-6">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Design</a></li>
                                <li><a href="#">Customers</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="items-center gap-6 text-xl hidden lg:flex">
                                <FaRegUser className="text-white cursor-pointer" />
                                <FaShoppingCart className="text-white cursor-pointer" />
                                <FaInstagram className="text-white cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full absolute top-0 left-0 opacity-20 z-10"></div>
                    <div className="max-w-[350px] lg:max-w-[700px] m-auto">
                        <div className="text-center pt-48 z-50">
                            <h1 className="font-bold text-white text-4xl">Build Your Home With Experts</h1>
                            <p className="text-white pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe eum maxime, alias velit voluptates quod adipisci assumenda obcaecati mollitia temporibus libero ratione iste! Sunt voluptatem dicta nisi tempora fugiat?</p>
                            <button className="bg-white text-[#111] rounded-full py-3 px-5 inline-block w-fit mt-5">Explore Our Design</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header