import React from 'react'
import Diary from './Diary';

export default function Calendar() {

  let months = ["May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March", "April"];

  return (
    <div>

      <h1 className='text-5xl font-bold py-4 grid place-items-center'>Diary</h1>
      <p className='text-xl px-8 py-4 text-center'>Welcome to your diary Here you can record anything you have in mind, ranging from feelings to symptoms.</p>

      {
        months.map((month) => (
          <Diary month={month} />
        ))
      }
    </div>
  )
}
