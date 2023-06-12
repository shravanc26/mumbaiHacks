import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { MdLocationOn, MdBook, MdAddCall, Md123 } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi"
import { BsStarFill, Bs123 } from "react-icons/bs"
import { useRouter } from 'next/router';
import ReviewCard from '../components/utils/ReviewCard'
import BuySub from "../components/buySub/BuySub"


const Home: NextPage = () => {
    const router = useRouter();
    const { id, name, email, phone, specialization, experience, location, cases_handled, rating, reviews, image } = router.query;
    const [loading, setLoading] = useState(false)
    return (
        <div className={styles.container}>
            <div className="mt-32 rounded-xl shadow-lg p-3 w-full md:w-[60vw] mx-auto border border-white bg-white ">
                <div className="max-w-md m-auto">
                    <div className="bg-white place-items-center m-auto cursor-pointer">
                        <img src='./men1.png' alt="tailwind logo" width={300} className="rounded-xl m-auto" />
                    </div>
                    <div className="bg-white flex mt-5 flex-col text-center justify-between space-y-2 p-3 ">
                        <div>
                            <h3 className="font-black md:text-4xl  text-[3em] cursor-pointer">{name}</h3>
                        </div>
                        <div>
                            <h3 className="font-gray text-xl relative bottom-6 font-thin">{specialization}</h3>
                        </div> <div>
                                <button onClick={() => setLoading(true)} type="button" className="drop-shadow-2xl m-auto flex justify-around text-white bg-primary rounded-lg p-2 px-5 text-lg">
                                    <div className='relative top-1 right-2'><MdAddCall />
                                    </div>
                                    Contact for legal advise</button>
                            </div>


                    </div>

                </div>
                <div className="bg-white flex mt-5 flex-col justify-between space-y-2 p-3">
                    <div>
                        <p className="font-black md:text-xl text-lg font-thin cursor-pointer">{name} has been practicing and handling cases independently with a result oriented approach, both professionally and ethically and has now acquired many years of professional experience in providing legal consultancy and advisory services.</p>
                    </div>
                </div>
                <div className='flex justify-around border-y-2 border-grey1 mt-8 p-4'>
                    <div>
                        <p className="md:text-lg text-lg flex">
                            <HiAcademicCap />
                            <p className='relative bottom-1 left-2'>
                                Specialization in {specialization}</p>
                        </p>
                        <p className="md:text-lg text-gray-500 text-base flex">
                            <MdBook />
                            <p className='relative bottom-1 left-2'>{experience} Experience
                            </p>
                        </p>
                        <p className="md:text-lg text-gray-500 text-base flex">
                            <MdLocationOn />
                            <p className='relative bottom-1 left-2'>
                                {location}
                            </p>
                        </p>
                    </div>
                    <div className='mr-4'>
                        <p className="md:text-lg text-gray-500 text-base flex">
                            <BsStarFill />
                            <p className='relative bottom-1 left-2'>
                                {rating}</p>
                        </p>
                        <p className="md:text-lg text-gray-500 text-base flex">
                            <Bs123 width={30} height={40} />
                            <p className='relative bottom-1 left-2'>
                                {cases_handled} cases Solved
                            </p>
                        </p>
                    </div>
                </div>
                <div className='mb-20'>
                    <p className='mt-4 text-2xl underline'>Reviews</p>
                    <ReviewCard client_name={'Sarah Johnson'} review={`${name} provided excellent legal advice and handled my case with professionalism. I highly recommend him.`} rating={5} />
                    <ReviewCard client_name={'David Thompson'} review={`I was impressed with ${name} expertise and dedication. He guided me through a difficult legal process and achieved a positive outcome.`} rating={4.6} />

                </div>
            </div>
            <BuySub loading={loading} setLoading={setLoading} phone={phone} />
        </div>
    )
}

export default Home