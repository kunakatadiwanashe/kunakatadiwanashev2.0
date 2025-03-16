import React from 'react'

const Contact = () => {
    return (

        <div className="flex flex-col md:flex-row justify-between container">
            <div className="md:w-1/3 pt-40">
                <h1 className="text-6xl font-bold mb-4 text-[#0668D5]">Contact Us</h1>
                <p className="text-gray-600 mb-6 w-[80%]">Feel free to use the form or drop us an email. Old-fashioned phone calls work too.</p>
                <div className="mb-4">
                    <i className="fas fa-phone-alt text-[#0668D5]"></i>
                    <span className="ml-2 text-gray-800">+263 779 968 190</span>
                </div>
                <div className="mb-4">
                    <i className="fas fa-envelope text-[#0668D5]"></i>
                    <span className="ml-2 text-gray-800">kunakatadiwanashe99@gmail.com</span>
                </div>
                <div className="mb-4">
                    <i className="fas fa-map-marker-alt text-[#0668D5]"></i>
                    <span className="ml-2 text-gray-800">15731 Kuwadzana 6<br />Harare, Zimbabwe</span>
                </div>
            </div>



            <div className="md:w-2/3 p-4">
                <form className="space-y-4 p-4 rounded-lg shadow-md mt-4">
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="block text-gray-700">Name</label>
                            <input type="text" placeholder="First" className="w-full border border-gray-300 p-2 rounded-md" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700">&nbsp;</label>
                            <input type="text" placeholder="Last" className="w-full border border-gray-300 p-2 rounded-md" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="email" placeholder="example@email.com" className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>




                    <div className="p-4 rounded-lg shadow-md mt-4">
                        <h2 className="text-lg font-bold mb-4">What services do you need ?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Website Development
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                App Development
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                E-commerce Site
                            </label>

                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                UI/UX Design
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                S.E.O
                            </label>

                        </div>
                    </div>

                    <div className="p-4 rounded-lg shadow-md mt-4">
                        <h2 className="text-lg font-bold mb-4">Budget for the project?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <label className="flex items-center">
                                <input type="radio" name="budget" className="mr-2" />
                                Less than $400
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="budget" className="mr-2" />
                                $400 - $800
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="budget" className="mr-2" />
                                $800 - $1000
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="budget" className="mr-2" />
                                More than $1000
                            </label>
                        </div>
                    </div>

                    <div className=" p-4 rounded-lg shadow-md mt-4">
                        <h2 className="text-lg font-bold mb-4">Brief about your project</h2>
                        <textarea placeholder="Project description" className="w-full p-2 border border-[#0668D5] rounded h-22"></textarea>
                    </div>


                    <div>
                        <button type="submit" className="bg-[#0668D5] text-white px-6 py-2 rounded-md">Submit</button>
                    </div>
                </form>
            </div>
        </div>





    )
}

export default Contact
