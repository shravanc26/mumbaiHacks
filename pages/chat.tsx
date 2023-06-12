import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Page from '../components/chat/Chat'


const Home: NextPage = () => {
    return (
        <div>
            <Page />
        </div>
    )
}

export default Home