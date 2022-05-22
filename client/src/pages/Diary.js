import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Diary(props) {

    const [color, setColor] = useState(false);
    let date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return (
        <div className='bg-white text-black w-4/5 m-auto text-center'>
            <h1 className='text-2xl py-2'>{props.month} 2022</h1>
            <div className='w-full flex justify-evenly'>
                {
                    weeks.map((day) => (
                        <p>{day}</p>
                    ))
                }
            </div>
            <div className='m-auto grid mt-2 w-[90%] grid-cols-7'>
                {date.map((date) => (
                    <NavLink
                        state={{
                            date: date,
                            month: props.month
                        }}
                        style={{ backgroundColor: color ? "green" : "white" }}
                        className='no-underline text-black h-24 border-[1px] border-solid border-black'
                        exact to="/add">
                        <div onClick={() => { setColor(true) }} >{date}</div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Diary