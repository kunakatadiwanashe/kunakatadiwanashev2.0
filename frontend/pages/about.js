import React from 'react'

import kun from '../public/img/kun.png'

const about = () => {
  return (
<>


<div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg ">
                    <div className="md:w-1/2 mb-8 md:mb-0 pl-20">
                        <p className="text-lg leading-relaxed mb-4 pp">
                            I'M A FRONTEND WEB DEVELOPER BUILDING THE FRONT-END OF WEBSITES AND WEB APPLICATIONS THAT LEAD TO THE SUCCESS OF THE OVERALL PRODUCT. CHECK OUT SOME OF MY WORK IN THE PROJECTS SECTION.
                        </p>
                        <p className="text-lg leading-relaxed mb-4 pp">
                            I ALSO LIKE SHARING CONTENT RELATED TO THE STUFF THAT I HAVE LEARNED OVER THE YEARS IN WEB DEVELOPMENT SO IT CAN HELP OTHER PEOPLE OF THE DEV COMMUNITY. FEEL FREE TO CONNECT OR FOLLOW ME ON MY LINKEDIN WHERE I POST USEFUL CONTENT RELATED TO WEB DEVELOPMENT AND PROGRAMMING.
                        </p>
                        <p className="text-lg leading-relaxed pp">
                            I'M OPEN TO JOB OPPORTUNITIES WHERE I CAN CONTRIBUTE, LEARN AND GROW. IF YOU HAVE A GOOD OPPORTUNITY THAT MATCHES MY SKILLS AND EXPERIENCE THEN DON'T HESITATE TO CONTACT ME.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <mg src={kun} alt="A person smiling and touching their face" className="rounded-lg shadow-lg"/>
                    </div>
                </div>


{/* contact */}


<div className="flex flex-col md:flex-row justify-between p-20">
                    <div className="md:w-1/2 p-4">
                        <h1 className="text-4xl font-bold mb-4 text-[#0668D5]">Contact Us</h1>
                        <p className="text-gray-600 mb-6">Feel free to use the form or drop us an email. Old-fashioned phone calls work too.</p>
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
                    <div className="md:w-1/2 p-4">
                        <form className="space-y-4">
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
                            <div>
                                <label className="block text-gray-700">Phone (optional)</label>
                                <input type="text" placeholder="xxx-xxx-xxxx" className="w-full border border-gray-300 p-2 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Message</label>
                                <textarea placeholder="Type your message ..." className="w-full border border-gray-300 p-2 rounded-md h-32"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="bg-[#0668D5] text-white px-6 py-2 rounded-md">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>






















</>
  )
}

export default about
