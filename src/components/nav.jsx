import { useState } from "react";
import logo from '../assets/icons/Logo.png'
import call from '../assets/icons/Call.png'
import phone from '../assets/icons/phone.png'
import like from '../assets/icons/like.png'





const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <img src={logo} alt="" />


                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-700 hover:text-blue-600">Услуги</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">О нас</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">Блог</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">Контакты</a>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                        <img src={call} alt="" />
                    </button>
                    <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                        <img src={like} alt="" />
                    </button>
                    <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800">
                        <img src={phone} alt="" />
                    </button>
                   

                 
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t py-4">
                    <a href="#" className="block px-6 py-2 text-gray-700 hover:text-blue-600">Услуги</a>
                    <a href="#" className="block px-6 py-2 text-gray-700 hover:text-blue-600">О нас</a>
                    <a href="#" className="block px-6 py-2 text-gray-700 hover:text-blue-600">Блог</a>
                    <a href="#" className="block px-6 py-2 text-gray-700 hover:text-blue-600">Контакты</a>
                </div>
            )}
        </nav>
    );
};

export default Nav;
