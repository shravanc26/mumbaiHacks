import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Page from '../components/lawyers/Page';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Page />
        </div>
    )
}

export default Home