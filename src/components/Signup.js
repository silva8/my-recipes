import React, { useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import './Signup.scss';

export default function Signup() {
    const { currentUser, signinWithGoogle } = useAuth();
    
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    return (
        <>
            <div className="signup-container"> {/*flex justify-center items-center max-w-sm w-full h-auto border-2 border-gray-300 rounded"> */}
                <div className="signup-content"> {/* flex flex-col items-center justify-around h-4/5"> */}
                    <div className="signup-header"> {/* flex flex-col items-center mb-2"> */}
                        <h2 className="signup-title text-center text-2xl my-4">Create Account</h2>
                        <a onClick={signinWithGoogle}>
                            <img className="signup-icon w-8 h-8 mb-4" src="images/google-plus.png" />
                        </a>
                        <div className="signup-paragraph text-gray-400">Or use your email</div>
                    </div>
                    <form>
                        <div className="signup__input-container my-2">
                            <input type="text" placeholder="Name" required className="signup__input w-48 h-10 px-2 rounded border border-gray-300" />
                        </div>
                        <div className="signup__input-container my-2">
                            <input type="email" placeholder="Email" required className="signup__input w-48 h-10 px-2 rounded border border-gray-300"/>
                        </div>
                        <div className="signup__input-container my-2">
                            <input type="password" placeholder="Password" required className="signup__input w-48 h-10 px-2 rounded border border-gray-300"/>
                        </div>
                        <button type="submit" className="signup__button--submit bg-blue-600 text-white rounded w-48 h-10 mb-6">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}