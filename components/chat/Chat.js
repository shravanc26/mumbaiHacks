import React from 'react'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import { BsRobot } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { useRouter } from 'next/router';


export default function Chat() {
    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const { text } = router.query;
    const [convo, setConvo] = useState(['']);
    console.log(text)
    const formSubmit = (search, e) => {
        e.preventDefault();
        console.log(searchText)
        axios.post("http://10.172.54.37:5000/model", { text: searchText })
            .then((data) => {
                data = data.data[1]
                setConvo([...convo, search, data])
                setSearchText("");
            })
            .catch((err) => console.log(err))
    }
    const knowMore = () => {
        const temp = convo;
        console.log(temp)
        axios.post("http://10.172.54.37:5000/chatgpt", { text: temp[temp.length-1] })
            .then((e) => {
                console.log(e.data.response)
                const data = e.data.response
                const data1 = {
                    'message' : data
                }
                setConvo([...convo, "Elaborate For Me", data1])
                setSearchText("");
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        axios.post("http://10.172.54.37:5000/model", { text: text })
            .then((data) => {
                const data1 = data.data[1]
                console.log(data1)
                setConvo([...convo, text, data1])
                setSearchText("");
                console.log(convo)
            })
            .catch((err) => console.log(err))
    }, [])

    const suggestLawyers = () => {

    }

    return (
        <div >
            <div className='absolute justify-center w-full h-full ml-auto'>
                <div className='mx-auto h-[80vh] mt-24 overflow-y-scroll border-0 '>
                    {
                        convo && convo.map((con, idx) => {
                            if (idx % 2) {
                                return <UserPrompt author={"user"} text={con} />
                            }
                            else return <BotPrompt author={"Bot"} text={con} />
                        })
                    }
                </div>
                <div className='mx-auto w-1/2 absolute bottom-5 left-1/4 flex '>
                    <form className="w-full px-4" onSubmit={(e) => formSubmit(searchText, e)}>
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
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>
                    </form>
                    {/* <button onClick={knowMore} hidden={convo.length <= 1} type="button" className="drop-shadow-2xl w-[10rem] mr-4 h-[4rem] m-auto flex justify-around text-white bg-primary rounded-lg p-2 py-4 text-lg">
                        <p>Know more</p>
                    </button> */}
                    <button onClick={() => router.push({
      pathname: '/lawyers',
  })} hidden={convo.length <= 1} type="button" className="drop-shadow-2xl w-[10rem] h-[4rem] m-auto flex justify-around text-white bg-primary py-4 rounded-lg p-2 text-lg">
                        <a href="#lawyer">Get Lawyers</a>
                    </button>
                </div>
            </div>
        </div>
    )
}


const UserPrompt = ({ author, text }) => {
    if (text == '') return <div></div>
    return <div className='w-full border-b border-y-white'>
        <div className='w-1/2 mx-auto justify-left py-3 text-lg text-black flex flex-row' >
            <div className='w-15 h-15 my-auto pb-5'><FaUser className='w-20 h-20' /></div>
            <div className='ml-3 text-xl text-center'><p>{text}</p></div>
        </div>
    </div>
}


const BotPrompt = ({ author, text }) => {
    if (text == '') return <div></div>
    // console.log(text);
    return <div className='w-full bg-grey2 border-b border-y-white'>
        <div className='w-1/2 mx-auto justify-left py-3 text-lg text-black flex flex-row' >
            <div className='w-15 h-15 my-auto pb-5'><BsRobot className='w-20 h-20' /></div>
            <div className='ml-5'>
                {
                    text.message
                    ? <div><p>{text.message}</p></div>
                    : <>
                    <p className='font-bold text-xl'>{text["Heading"]}</p>
                    <p> <span className='font-bold'>Your case falls under the </span>{text["Act ID"]}</p>
                    <p> <span className='font-bold'>And</span>{text["Section ID"]}</p>
                    <p className='font-bold'>More Info : </p>
                    {
                        text.Description && text.Description.map((data) => {
                            {
                                if (typeof data === 'string') {
                                    return <p>{data}</p>
                                }
                            }
                        })
                    }
                    </>
                }
                
            </div>
        </div>
    </div>
}