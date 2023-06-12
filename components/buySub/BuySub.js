import React, { useState } from 'react';

import { MdLocationOn, MdBook, MdAddCall, Md123 } from "react-icons/md";

export default function BuySub({ loading, setLoading, phone }) {
    const [index, setIndex] = useState(-1);
    const [flag, setFlag] = useState(0)
    const handleBoxClick = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const onSubmit = () => {
        setFlag(1);
    };

    if (loading) {
        return (
            <div className="backdrop-filter backdrop-blur-md backdrop-opacity-95 bg-white/30 fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-secondary flex flex-col items-center justify-center">
                {
                    !flag ? <div className="absolute top-64 bg-white w-[30vw] border-2 border-gray drop-shadow-xl	 rounded-lg p-4">
                        <div className="font-bold text-2xl text-center my-4">Choose a Plan</div>
                        <div className="flex flex-col">
                            <div
                                className={`my-2 border-2 border-grey2 p-4 rounded-lg hover:border-blue text-lg cursor-pointer ${index === 0 ? 'border-blue' : ''
                                    }`}
                                onClick={() => handleBoxClick(0)}
                            >
                                <div>Monthly Subscription</div>
                                <div className="font-bold">$10.00</div>
                                <div className="border-green border-2 w-max px-2 rounded">1 Week Free Trial</div>
                                <div className="text-red">Cancel anytime</div>
                            </div>
                            <div
                                className={`my-2 border-2 border-grey2 p-4 rounded-lg hover:border-blue text-lg cursor-pointer ${index === 1 ? 'border-blue' : ''
                                    }`}
                                onClick={() => handleBoxClick(1)}
                            >
                                <div>Yearly Subscription</div>
                                <div className="font-bold">$115.00</div>
                                <div className="border-green border-2 w-max px-2 rounded">1 Week Free Trial</div>
                                <div className="text-red">Cancel anytime</div>
                            </div>
                            <div>
                                <button
                                    onClick={onSubmit}
                                    type="button"
                                    className="drop-shadow-2xl m-auto flex justify-around text-white bg-primary rounded-lg p-2 px-5 text-lg"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                        : <div>
                            <div>
                                <button onClick={() => setLoading(false
                                    )} type="button" className="drop-shadow-2xl m-auto flex justify-around text-white bg-primary rounded-lg p-2 px-5 text-lg">
                                    <div className='relative top-1 right-2'><MdAddCall />
                                    </div>
                                   {phone}</button>
                            </div>
                        </div>
                }


            </div>
        );
    }
    return null;
}
