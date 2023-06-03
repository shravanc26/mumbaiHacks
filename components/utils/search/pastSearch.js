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
            <div className="border-b-[1px] mx-8 border-neutral-100 py-2 flex cursor-pointer">
                <Image src='/searchHistory.png' width={40} height={40}/>
                {question}
            </div>
        )
    }
  return (
    <div className="w-[38vw] m-auto mt-2 bg-white text-xl text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600">
        
        {
            data
            ? data.map((e) => {return<List question={e} />})
            : null
        }
    </div>
  )
}
