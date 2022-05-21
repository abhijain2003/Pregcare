import React from "react"
import HeroImg from '../assets/woman-5857744.jpg'
import CounselorImg from '../assets/girl-5801502.jpg'
import Diary from '../assets/notebook-1840276.jpg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

export default function Home() {

    const { t } = useTranslation();

    return (
        <div className='md:mx-28 mx-4 pt-10 pb-12'>

            <div className='md:grid md:grid-cols-2 items-center pt-10'>
                <div className=''>
                    <h1 className='text-3xl md:text-5xl'>{t('homeTitle')}</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>{t('hoemAbout')}</p>
                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={HeroImg} alt="img" width="500" height="500" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 pt-12 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={CounselorImg} alt="img" width="600" height="600" />
                </div>
                <div className=''>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>{t('homeCounselor')}</p>

                    <Link to="/counselor">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>{t('homeCounselorLink')}</button>
                    </Link>
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 items-center pt-10'>
                <div className=''>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>{t('homeDiary')}</p>
                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={Diary} alt="img" width="500" height="500" />
                </div>
            </div>

        </div>
    )
}
