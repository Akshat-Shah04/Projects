import React from 'react'
import Header from '../Common/Header'
const SignUp = () => {
    return (
        <div>
            <div>
                <Header />
                <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                    <div className="w-3/4 mt-12 mb-12 mx-auto p-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign Up</h2>
                        <form>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <label className="block text-gray-700 font-semibold mb-1">Full Name <span className='inline-block me-4 text-red-600'>*</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        // value={formData.name}
                                        className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="block text-gray-700 font-semibold mb-1">Date Of Birth <span className='text-red-600'>*</span></label>
                                    <input
                                        type="date"
                                        name="date"
                                        // value={formData.date}
                                        className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">PAN Number <span className='text-red-600'>*</span></label>
                                    <input
                                        type="text"
                                        name="panNumber"
                                        // value={formData.panNumber}
                                        className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Aadhar Number <span className='text-red-600'>*</span></label>
                                    <input
                                        type="number"
                                        name="amount"
                                        // value={formData.amount}
                                        className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Email ID <span className='text-red-600'>*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        // value={formData.chequeNumber}
                                        className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Phone Number <span className='text-red-600'>*</span></label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        // value={formData.receiptNumber}
                                        className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">City <span className='text-red-600'>*</span></label>
                                    <input
                                        type="text"
                                        name="city"
                                        // value={formData.city}
                                        className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Password <span className='text-red-600'>*</span></label>
                                    <input
                                        type="text"
                                        name="referredBy"
                                        // value={formData.referredBy}
                                        className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
