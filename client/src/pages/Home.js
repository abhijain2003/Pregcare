import React from "react"
import HeroImg from '../assets/hero.svg'
import CounselorImg from '../assets/counselor.svg'
import Diary from '../assets/diary.svg'
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div className='md:mx-28 mx-4 pt-10 pb-12'>

            <div className='md:grid md:grid-cols-2 items-center pt-10'>
                <div className=''>
                    <h1 className='text-3xl md:text-5xl'>Welcome to PregCare</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>Caring for yourself when your pregnant can be quite a challenge. From getting enough nutrients, to being happy, there's a lot on your mind. PregCare will help you to manage your pregnancy journey. Click the button to get started!</p>
                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={HeroImg} alt="img" width="500" height="500" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 pt-12 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={CounselorImg} alt="img" width="300" height="300" />
                </div>
                <div className=''>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>Are you feeling down? Want to talk to someone and tell them how you feel? PregCare offers counseling and therapists services as well. Pregnancy is not an easy journey and having someone by your side will benefit you. Click the button below to schedule a meeting with a counselor today!</p>

                    <Link to="/counselor">
                        <button className='bg-secondary text-white py-2 px-8 rounded-md text-xl md:text-2xl'>See a counselor</button>
                    </Link>
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 items-center pt-10'>
                <div className=''>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>Want to keep track of your daily feelings and symptoms? Head over to the Diary tab to journal what you are feeling as well as to keep track of anything else!</p>
                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={Diary} alt="img" width="500" height="500" />
                </div>
            </div>

        </div>
    )
}
