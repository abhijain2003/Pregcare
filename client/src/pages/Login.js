import React from 'react'
import firebase from 'firebase'
import { auth } from '../services/firebase'
// import LoginImg from "../assets/login.svg"
import LoginImg from "../assets/pregnancy-2700659.jpg"
import GoogleLogo from "../assets/google_logo.png"

function LogIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div className="relative">

            <div className="z-10 mt-16 bg-secondary md:h-96 md:w-96 md:mt-16 md:ml-44 rounded-3xl"></div>

            <div className="z-20 p-4 m-8 origin-bottom-right transform border-4 border-tertiary lg:mx-56 md:mx-8 lg:-mt-80 rounded-2xl bg-pink-500">
                <div className="p-4 space-y-10 mad:space-y-0 md:grid md:grid-cols-2">

                    <div className="w-11/12 p-8 rounded-lg lg:-ml-4 sm:ml-16">
                        <img width="600px" height="400px" src={LoginImg} alt="img" className="rounded-lg" />
                    </div>

                    <div className="md:flex md:flex-col md:justify-center lg:pr-16">

                        <h2 className="mb-4 text-6xl self-center font-bold tracking-wider text-white">
                            PregCare
                        </h2>

                        <div className='grid place-items-center'>
                            <div className="w-64 h-64 my-5 block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 cursor-pointer shadow-lg">
                                <div className="flex items-center justify-center h-full bg-white hover:bg-gray-100" onClick={signInWithGoogle}>
                                    <img src={GoogleLogo} alt="google" className="w-6" />
                                    <span className="ml-4 text-lg">Sign in with Google</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="z-10 float-right w-40 h-40 mr-48 -mt-40 bg-secondary rounded-3xl md:block hidden"></div>

        </div>
    )
}

export default LogIn
