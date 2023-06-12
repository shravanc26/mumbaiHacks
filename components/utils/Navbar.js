import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router';
export default function Navbar() {
    const [show, setshow] = useState(false);
    const router = useRouter();
    const myLoader = ({ src, width, quality }) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    }
    const toogle = () => { setshow(!show); }
    return (
        <div>
            <nav className="bg-white shadow-lg text-black font-bold fixed z-10 top-0 w-full">
                <div className="">
                    <div className="flex py-2 px-2">
                        <div className="w-4/5">
                            <a href="#"  className="absolute top-2 left-8">
                                <Image src="/logo.png" alt="me" width="130" height="70" />
                            </a>
                        </div>
                            <div className="hidden px-24 md:flex justify-evenly space-x-1 text-lg w-1/5">
                                <a href="/" onClick={()=> router.push("/")} className="py-4 px-2   hover:text-green-500 transition duration-300 hover:text-gray">Home</a>
                                <a href="/lawyers" className="py-4 px-2   hover:text-green-500 transition duration-300 hover:text-gray">Lawyers</a>
                                <a href="/chat" className="py-4 px-2   hover:text-green-500 transition duration-300 hover:text-gray">Chat</a>
                        </div>
                        <div className="flex justify-end px-4 space-x-5 w-4/5">
                            <div className="md:hidden flex items-center">
                                <button className="outline-none mobile-menu-button" onClick={toogle}>
                                    <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                        x-show="!showMenu"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
                {show && <div className="mobile-menu">
                    <ul>
                        <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-black bg-green-500 font-semibold">Home</a></li>
                        <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
                        <li><a href="#chat" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Chat</a></li>
                    </ul>
                </div>
                }
            </nav>
        </div>
    );
}