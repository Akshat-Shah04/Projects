import React from 'react'
import Header from '../Common/Header'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <Header />
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="w-3/4 mt-12 mb-12 mx-auto p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-mono font-bold text-gray-800 mb-6">Log In</h2>
                    <form className='font-mono'>
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <label className="block text-gray-700 font-semibold mb-1">User Name <span className='inline-block me-4 text-red-600'>*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    required
                                />
                            </div>

                        </div>


                        <div className="row mb-4">

                            <div className='col-md-12'>
                                <label className="block text-gray-700 font-semibold mb-1">Password <span className='text-red-600'>*</span></label>
                                <input
                                    type="text"
                                    name="referredBy"
                                    // value={formData.referredBy}
                                    className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                        </div>
                        <div className="row mb-4 items-center justify-center">
                            <Link to="/forgotpwd" className='cursor-pointer text-sm font-mono'>Forgot Password ?</Link>
                        </div>
                        <div className="row mb-4 items-center justify-center">
                            <div className='col-md-4'>
                                <button
                                    type="submit"
                                    className="w-3/4  bg-green-700 hover:bg-green-950 text-white font-bold py-3 rounded-lg transition duration-200"
                                >
                                    Log-In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
