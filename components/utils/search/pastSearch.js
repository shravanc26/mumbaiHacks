import React from 'react'
import Image from 'next/image'

export default function PastSearch() {
    const data = [ 
        'How to murder someone',
        'What to do , I crashed some car',
        'I hit the police man',
        'Hello, what to do?',
        'How to murder someone',
        'What to do , I crashed some car',
        'I hit the police man',
        'Hello, what to do?',
        'How to murder someone',
    ];
    const List = ({question}) => {
        return(
            <div className="py-2 px-8 flex cursor-pointer  border-t-2 border-grey hover:bg-grey">
                {question}
            </div>
        )
    }
  return (
    <div className="w-[40vw] m-auto mt-2 bg-white text-xl text-primary rounded-md outline-none focus:bg-white">
        <div className='ml-8 font-semibold text-thin'>
            Recent
        </div>
        
        {
            data
            ? data.map((e) => {return<List question={e} />})
            : null
        }
    </div>
  )
}
