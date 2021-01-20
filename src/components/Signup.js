import React, { useRef } from 'react';

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    return (
        <>
            <div className="flex justify-center items-center max-w-sm w-full h-auto border-2 border-gray-300 rounded">
                <div className="flex flex-col items-center justify-around h-4/5">
                    <div className="flex flex-col items-center mb-2">
                        <h2 className="text-center text-2xl my-4">Create Account</h2>
                        <img className="w-8 h-8 mb-4" src="images/google-plus.png" />
                        <div className="text-gray-400">Or use your email</div>
                    </div>
                    <form>
                        <div className="my-2">
                            <input type="text" placeholder="Name" required className="w-48 h-10 px-2 rounded border border-gray-300" />
                        </div>
                        <div className="my-2">
                            <input type="email" placeholder="Email" required className="w-48 h-10 px-2 rounded border border-gray-300"/>
                        </div>
                        <div className="my-2">
                            <input type="password" placeholder="Password" required className="w-48 h-10 px-2 rounded border border-gray-300"/>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white rounded w-48 h-10 mb-6">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}