import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Search from "../components/utils/search/search";
import { useEffect, useState, useRef } from 'react';

const Home: NextPage = () => {
    const [searchText, setSearchText] = useState('');
    const [convo, setConvo] = useState(['']);

    const formSubmit=() =>{
        event.preventDefault();
        console.log(searchText)
        setSearchText("");
        setConvo([...convo, searchText])
    }
    return (
        <div className={styles.container}>
            <div className='absolute justify-center w-full h-full ml-auto'>
                <div className='mx-auto h-[80vh] mt-20 overflow-y-scroll border-0 '>
                    {
                        convo && convo.map(con => {
                            return <TextTile author = {""} text = {con} />
                        })
                    }
                </div>
                <div className='mx-auto w-1/2 absolute bottom-5 left-1/4'>
                    <form className="w-full px-4" onSubmit={formSubmit}>
                        <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full h-16 text-xl py-3 pl-12 pr-2 border rounded-md outline-none border-gray shadow-xl"
                            value={searchText}
                            onChange={(e)=>setSearchText(e.target.value)}
                        />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


const TextTile = ({author, text}) => {
    if(text == '') return <div></div>
    return <div className='w-full bg-grey border-b border-y-white'>
            <div className='w-1/2 mx-auto p-5 py-10 text-lg text-black'>{author} {text}</div>
        </div>
}


export default Home