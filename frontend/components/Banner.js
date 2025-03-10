import React from 'react'

const Banner = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="text-center md:text-left md:flex md:items-center md:justify-between max-w-4xl mx-auto">
                <div className="md:w-1/2">
                    <p className="text-lg text-gray-400">Kunaka Tadiwanashe</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0668D5;]">Web Developer +</h1>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0668D5;]">Ux Designer</h1>
                    <p className="text-gray-400 mt-4">I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
                    <div className="mt-8 flex flex-col md:flex-row items-center md:items-start">
                        <a href="#" className="bg-[#0668D5] text-white px-6 py-3 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-4">
                            <i className="fas fa-download mr-2"></i> Download CV
                        </a>
                        <div className="flex space-x-4">
                            <a href="#" className="text-[#0668D5;] text-2xl"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-[#0668D5;] text-2xl"><i className="fab fa-github"></i></a>
                            <a href="#" className="text-[#0668D5;] text-2xl"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="text-[#0668D5;] text-2xl"><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <img src="https://placehold.co/300x300" alt="Portrait of a person with a neutral expression" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
}

export default Banner


