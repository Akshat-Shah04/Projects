import React, { useState, useRef } from 'react';
import Header from '../Common/Header';

const Otp = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (!isNaN(value) && value.length <= 1) {  // Allow only single digit numbers
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to next input if not last input and value is entered
            if (value && index < 3) {
                inputs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();  // Move to previous input if backspace is pressed and current box is empty
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('OTP submitted:', otp.join(''));  // Combine the array into a single string
    };

    return (
        <div>
            {/* <Header /> */}
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="w-3/4 mt-12 mb-12 mx-auto p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-mono font-bold text-gray-800 mb-6">Enter OTP</h2>
                    <form className="font-mono" onSubmit={handleSubmit}>
                        <div className="flex justify-center space-x-2 mb-6">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(el) => (inputs.current[index] = el)}
                                    className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="w-3/4 bg-green-700 hover:bg-green-950 text-white font-bold py-3 rounded-lg transition duration-200"
                            >
                                Send OTP
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Otp;
