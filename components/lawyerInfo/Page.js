import React from 'react'

export default function Page() {
    return (
        <div>
            <div className="flex flex-col justify-center h-1/4 mt-32">
                <div
                    className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 w-full md:w-[60vw] mx-auto border border-white bg-white ">
                    <div className="bg-white grid place-items-center cursor-pointer"  >
                        <img src={image} alt="tailwind logo" width={200} classNameName="rounded-xl" />
                    </div>
                    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                        <h3 className="font-black text-gray-800 md:text-3xl text-2xl  cursor-pointer">{name}</h3>
                        <div className='flex justify-between'>
                            <div>
                                <p className="md:text-lg text-gray-500 text-lg flex">
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
                            <div className='w-1 h-full border-l-2 border-gray'></div>
                            <div>
                                <p className="md:text-lg text-gray-500 text-base flex">
                                    <BsStarFill />
                                    <p className='relative bottom-1 left-2'>
                                        {rating}</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
