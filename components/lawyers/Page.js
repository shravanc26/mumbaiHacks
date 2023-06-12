import React from 'react'
import { data } from './Data';
import { MdLocationOn, MdBook } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi"
import { BsStarFill } from "react-icons/bs"
import Image from 'next/image'

import { useRouter } from 'next/router';

const LawyerCard = ({ id, name, email, phone, specialization, experience, location, cases_handled, rating, reviews, image }) => {
    // console.log(image)
    // console.log(rating);
    const router = useRouter();
    const click = () => {
        router.push({
            pathname: '/lawyer-info',
            query: {id:id, name:name, email:email, phone:phone, specialization:specialization, experience:experience, location:location, cases_handled:cases_handled, rating:rating, reviews:reviews, image:image },
        });
    }
    return (
        <div class="flex flex-col justify-center h-1/4 mt-32">
            <div
                class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 w-full md:w-[60vw] mx-auto border border-white bg-white ">
                <div class="bg-white grid place-items-center cursor-pointer"  onClick={click}>
                    <img src={image} alt="tailwind logo" width={200} className="rounded-xl" />
                </div>
                <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 class="font-black text-gray-800 md:text-3xl text-2xl  cursor-pointer"  onClick={click}>{name}</h3>
                    <div className='flex justify-between'>
                        <div>
                            <p class="md:text-lg text-gray-500 text-lg flex">
                                <HiAcademicCap />
                                <p className='relative bottom-1 left-2'>
                                    Specialization in {specialization}</p>
                            </p>
                            <p class="md:text-lg text-gray-500 text-base flex">
                                <MdBook />
                                <p className='relative bottom-1 left-2'>{experience} Experience
                                </p>
                            </p>
                            <p class="md:text-lg text-gray-500 text-base flex">
                                <MdLocationOn />
                                <p className='relative bottom-1 left-2'>
                                    {location}
                                </p>
                            </p>
                        </div>
                        <div className='w-1 h-full border-l-2 border-gray'></div>
                        <div>
                            <p class="md:text-lg text-gray-500 text-base flex">
                                <BsStarFill />
                                <p className='relative bottom-1 left-2'>
                                    {rating}</p>
                            </p>
                            <p class="md:text-lg text-gray-500 text-base flex">
                                <MdBook />
                                <p className='relative bottom-1 left-2'>{experience} Experience
                                </p>
                            </p>
                            <p class="md:text-lg text-gray-500 text-base flex">
                                <MdLocationOn />
                                <p className='relative bottom-1 left-2'>
                                    {location}
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Page() {
    console.log(data)
    return (
        <div>
            <div>
                {
                    data && data.advocates.map((e) => {
                        return <LawyerCard {...e} />
                    })
                }
            </div>
        </div>
    )
}
