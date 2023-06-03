import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Search from "../components/utils/search/search";
import TextAnimation from "../components/utils/TextAnimation";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className='bg-secondary m-auto relative w-[97vw] h-[90vh] mt-[6rem] rounded-lg' >
                {/* <div className='opacity-500'>
                    <Image src='/bg1.png' className='bg-blend-normal ' layout="fill" />
                </div> */}
                <div className='absolute top-[10vh] ml-16 w-[70vw]'>
                    <TextAnimation />
                </div>
                <div className='relative top-[55vh] flex justify-center'>
                    <div>
                    <button type="button" className="drop-shadow-2xl text-white bg-primary rounded-lg p-4 px-5 text-lg hover:">Get started</button>
                    </div>
                    <Search />
                </div>
            </div>
            <div>
                <div>
                    <span>Features</span>
                </div>
                <div>
                    <div className="max-w-sm w-full lg:max-w-full lg:flex">
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home