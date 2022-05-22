import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Add() {

    const [inpval, setInpVal] = useState("");

    function handle() {
        alert(inpval === "" ? "fill the values" : "added Successfully")
    }

    const location = useLocation()
    const { date, month } = location.state

    return (
        <div className='py-6'>
            <div className='bg-pink-800 w-6/12 m-auto text-center my-12 h-128 rounded-xl px-12 py-6'>
                <h1 className='text-white text-4xl'>Add Entry</h1>
                <div className='infoAdd' style={{ textAlign: 'start' }}>
                    <div style={{ width: '90%', margin: 'auto' }}>
                        <h2 className='text-white text-2xl py-2'>Date</h2>
                        <p className='bg-white text-black px-2 py-4 text-center rounded-lg text-2xl'>{date}, {month}</p>
                    </div>
                    <div style={{ width: '90%', margin: 'auto' }}>
                        <h2 className='text-white text-2xl py-2'>Description</h2>
                        <textarea className='bg-white h-36 text-black w-full px-2 py-4 text-center rounded-lg text-2xl' type="text" />
                    </div>
                    <div style={{ width: '90%', margin: 'auto' }}>
                        <p className='text-white text-2xl py-2'>How much long were you outside for vitamin-D *</p>
                        <input onChange={(event) => setInpVal(event.target.value)} className='bg-white text-black px-2 py-4 text-center rounded-lg text-2xl w-full' type="number" placeholder='minutes' />
                    </div>
                    <div className='grid place-items-center pt-8'>
                        <button className="bg-secondary rounded-xl text-md text-2xl py-2 px-4">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
