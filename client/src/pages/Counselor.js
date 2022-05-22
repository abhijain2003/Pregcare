import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

const docInfo = [
    {
        id: 1,
        img_path: "/assets/doctorF.jpg",
        name: "Dr. Emily",
        bio: "BS in Psychology from San Jose State Uniersity 5+ years of experience",
        description:
            "Hi, I'm Aliyah Daker and I have experience in providing counseling services to new mothers and mothers-to-be.",
        status: "Online",
    },
    {
        id: 2,
        img_path: "/assets/doctorM.jpg",
        name: "Dr. Han",
        bio: "MS in Psychology from Augusta Uniersity 2+ years of experience",
        description:
            "Hi, I'm Han Watson and I am a recent grad from Augusta University. I would love to help you and listen to you.",
        status: "Online",
    },
    {
        id: 3,
        img_path: "/assets/doctorM.jpg",
        name: "Dr. Will",
        bio: "MD in Psychology from Emory Uniersity 15+ years of experience",
        description:
            "Hi, I'm Dr. Will Smith and I am a medical psycholgist. I have experience in providing counseling services to new mothers and mothers-to-be.",
        status: "Online",
    },
    {
        id: 4,
        img_path: "/assets/doctorF.jpg",
        name: "Dr. Emily",
        bio: "MS in Psychology from Augusta Uniersity 2+ years of experience",
        description:
            "Hi, I'm Emily Watson and I am a recent grad from Augusta University. I would love to help you and listen to you.",
        status: "Online",
    },
    {
        id: 5,
        img_path: "/assets/doctorM.jpg",
        name: "Dr. Aron",
        bio: "BS in Psychology from San Jose State Uniersity 5+ years of experience",
        description:
            "Hi, I'm Aron Daker and I have experience in providing counseling services to new mothers and mothers-to-be. ",
        status: "Online",
    },
    {
        id: 6,
        img_path: "/assets/doctorF.jpg",
        name: "Dr. Winnie",
        bio: "MD in Psychology from Emory Uniersity 15+ years of experience",
        description:
            "Hi, I'm Dr. Winnie Smith and I am a medical psycholgist. I have experience in providing counseling services to new mothers and mothers-to-be.",
        status: "Online",
    },
];

export default function Counselor() {
    return (
        <div>
            <h1 className='text-5xl font-bold py-4 grid place-items-center'>Counselor</h1>
            <p className='text-xl px-8 py-4 text-center'>You can talk to any of the counselors online, either through video call or chat. Explore the couselors listed below and once you find a perfect match, you can schedule an apppointment with them.</p>

            <div className="flex flex-wrap flex-col-3 justify-around w-full px-16 pt-8 gap-x-1 gap-y-6 mb-12">

                {docInfo.map((exp) => (
                    <div className="max-w-sm content-center flex flex-col justify-center mx-auto bg-white mt-[10vh] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className=" h-40 rounded-t-lg bg-contain bg-no-repeat bg-[url(https://www.linkpicture.com/q/Rectangle-6.png)]  flex flex-col justify-end pl-20 pr-20 pt-52  max-w-[24rem]">
                            <img className="object-cover mb-2 z-10 rounded-md" height="400" width="200" src={exp.img_path} alt="logo" />

                        </div>
                        <div className="flex flex-col pl-10 pb-10">

                            <h1 className="text-3xl text-gray-200 font-semibold">{exp.name}</h1>

                            <div className="mb-2 mt-2">
                                <h1 className="text-base text-gray-300 font-semibold">{exp.bio}</h1>
                            </div>

                            <div className="pr-10 py-4">
                                <h1 className="text-base text-gray-300 font-semibold text-justify">{exp.description}</h1>
                            </div>

                            <div className="mt-2 flex items-center space-x-2">
                                <Link to="/chatroom">
                                    <button className="bg-secondary rounded-xl px-2 py-3 text-md">Book Appointment</button>
                                </Link>
                                <button className="bg-secondary rounded-xl px-2 py-3 text-md">Send money</button>
                            </div>
                        </div>
                    </div>

                ))}

            </div>

        </div>
    )
}
