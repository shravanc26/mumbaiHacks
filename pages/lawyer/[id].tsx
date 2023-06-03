import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();
    const { value } = router.query;
    const { id } = router.query;
    console.log(id)
    return (
        <div className={styles.container}>
            
        </div>
    )
}

export default Home