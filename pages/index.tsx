import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Search from "../components/utils/search/search";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <div style={{ width: '100vw', height: '100vh', position: 'relative', }} className='bg-gray' >
                <div className='opacity-500'>
                    <Image src='/bg1.png' className='bg-blend-normal ' layout="fill" />
                </div>
                <div className='relative top-[10vh] ml-16 w-[45vw]'>
                    <div className="bg-gradient-to-tr to-blue-400 from-green-500 p-10">
                        <div className="w-max">
                            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white  text-2xl text-white font-bold">Hello World</h1>
                        </div>
                    </div>
                    <div className="bg-gradient-to-tr to-blue-400 from-green-500 pl-10">
                        <div className="w-max">
                            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-2xl text-white font-bold">Hello World</h1>
                        </div>
                    </div>
                </div>
                <div className='relative top-[30vh] flex justify-center'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home