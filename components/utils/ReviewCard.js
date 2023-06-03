import React from 'react'
import {BsStarFill } from 'react-icons/bs'

export default function ReviewCard({ client_name, review, rating }) {
    return (
        <div className='border-b-2 border-grey1 py-4'>
            <div>
                <div>
                    {/* <Image /> */}
                </div>
                <div className='text-xl flex'>
                    {client_name}
                    <div className='flex ml-6'> 
                   {rating}
                   <BsStarFill color='gold' className='w-6 h-6 relative top-2 left-1 color-grey' /> 
                    </div>
                </div>
            </div>
            <div className='text-lg'>
                {review}
            </div>
        </div>
    )
}
