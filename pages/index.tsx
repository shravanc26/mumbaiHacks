import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Search from "../components/utils/search/search";
import TextAnimation from "../components/utils/TextAnimation";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { ParallaxProvider } from "react-scroll-parallax";


const Home: NextPage = () => {
    return (
        <ParallaxProvider scrollAxis="horizontal">
        <div className={styles.container}>
            <div className='bg-secondary m-auto relative w-[97vw] h-[90vh] mt-[6rem] rounded-lg' >
                <div className='absolute top-[10vh] ml-16 w-[70vw]'>
                    <TextAnimation />
                </div>
                <div className='relative top-[55vh] flex justify-center'>
                    <Search />
                </div>
            </div>
            <Player
                autoplay
                loop
                src="https://lottie.host/8edfd056-bb80-4de1-8d1f-615cde33e5a0/bEZ6c7Q6tb.json"
                style={{ height: '1000px', width: '900px' }}
                className='absolute top-20 right-10'
            >
            </Player>
           
        </div>
        </ParallaxProvider>
    )
}

export default Home