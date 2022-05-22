import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { HiX } from "react-icons/hi";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
    try {
        if (!window.ethereum)
            throw new Error("No crypto wallet found. Please install it.");

        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        ethers.utils.getAddress(addr);
        const tx = await signer.sendTransaction({
            to: addr,
            value: ethers.utils.parseEther(ether)
        });
        console.log({ ether, addr });
        console.log("tx", tx);
        setTxs([tx]);
    } catch (err) {
        setError(err.message);
    }
};

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

    const [showNavbar, setShowNavbar] = React.useState(false);

    const [error, setError] = useState();
    const [txs, setTxs] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        setError();
        await startPayment({
            setError,
            setTxs,
            ether: data.get("ether"),
            addr: data.get("addr")
        });
    };

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
                                <button className="bg-secondary rounded-xl px-2 py-3 text-md" onClick={() => setShowNavbar(true)}>Send money</button>

                                {showNavbar ? (
                                    <div>
                                        <form className="grid place-items-center overflow-x-hidden mx-4 md:mx-8 h-screen fixed inset-0 z-50 outline-none focus:outline-none w-screen" onSubmit={handleSubmit}>
                                            <div className="my-6 mx-auto w-screen ml-96">
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none text-white bg-pink-500 w-128">
                                                    <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-150} duration={250}>
                                                            <div className="text-2xl font-base tracking-wide cursor-pointer">
                                                                Transfer Money
                                                            </div>
                                                        </Link>

                                                        <button className="absolute right-6" onClick={() => setShowNavbar(false)} aria-hidden="false" aria-label="button">
                                                            <HiX className="h-7 w-7" aria-hidden="false" />
                                                        </button>

                                                    </div>

                                                    <div className="grid place-items-center">
                                                        <main className="mt-4 p-4">
                                                            <h1 className="text-xl font-semibold text-white text-center">
                                                                Send ETH payment
                                                            </h1>
                                                            <div className="">
                                                                <div className="my-3">
                                                                    <input
                                                                        type="text"
                                                                        name="addr"
                                                                        className="text-black text-xl p-2 rounded-xl w-[38rem]"
                                                                        placeholder="Recipient Address"
                                                                    />
                                                                </div>
                                                                <div className="my-3">
                                                                    <input
                                                                        name="ether"
                                                                        type="text"
                                                                        className="text-black text-xl p-2 rounded-xl w-[38rem]"
                                                                        placeholder="Amount in HBAR"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </main>
                                                        <footer className="p-4 grid place-items-center">
                                                            <button className='bg-pink-300 py-2 text-black px-8 rounded-md ml-2' type="submit">
                                                                Pay Now
                                                            </button>
                                                            <ErrorMessage message={error} />
                                                            <TxList txs={txs} />
                                                        </footer>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                        <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                                    </div>
                                ) : null}

                            </div>
                        </div>
                    </div>

                ))}

            </div>

        </div>
    )
}
