import React from 'react'

const Services = () => {
    return (
        <div>




            <div className="services p-18 text-white ">
                <div className="text-left">
                    <p className="text-sm ">OUR SERVICE</p>
                    <h1 className="text-4xl font-bold mt-2">
                        Services<span className="text-[#0668D5] pl-5">We're Offering</span><br />

                    </h1>
                    <p className="text-sm  mt-4 w-[70%] ">
                        We provide services designed to enhance business visibility, build a strong online reputation, expand market reach,
                        and boost revenue through effective digital strategies. Our offerings include
                    </p>
                </div>



                <div className="p-15">

                    <section className='flex flex-col justify-between items-center w-full h-[50vh]'>



                        <div className="relative flex flex-col justify-between h-[8vh]  w-full border-b-[1px] border-gray-300 ">

                            <div className="flex justify-between group cursor-pointer w-[80%] ">

                                <h3 className="text-lg hover:text-2xl hover:text-[#0668D5] transition-all duration-300 font-bold w-[30%]"> UI/UX Design </h3>
                                <p className="text-sm w-[60%] pb-5">
                                    We create visually stunning and user-friendly digital experiences that captivate your audience. Our UI/UX design services
                                     ensure seamless navigation, intuitive layouts, and engaging interfaces that enhance user satisfaction and drive conversions.
                                </p>

                                <img
                                    src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1743082920/kun/Portfolio/icons/ux_d9hncm.png"
                                    alt="Hovered Image"
                                    className="absolute right-[-15rem] top-[-40px] transform -translate-x-1/2 w-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>

                        </div>


                        <div className="relative flex flex-col justify-center h-[8vh] w-full border-b-[1px] border-gray-300">

                            <div className="flex justify-between group cursor-pointer w-[80%] ">

                                <h3 className="text-lg hover:text-2xl transition-all duration-300 font-bold w-[30%] hover:text-[#0668D5]"> Branding</h3>
                                <p className="text-sm w-[60%] pb-5">
                                    Your brand is your identity, and we help you make a lasting impression. From logo design and brand strategy to complete
                                     visual identity development, we craft unique and memorable branding that resonates with your target audience.
                                </p>

                                <img
                                    src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1743083814/kun/Portfolio/icons/original-70ca3582560c4735b0dec6f8cbdbd324_czqiph.webp"
                                    alt="Hovered Image"
                                    className="absolute  right-[-14rem]  top-[-40px] transform -translate-x-1/2 w-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>

                        </div>



                        <div className="relative flex flex-col justify-center h-[8vh] w-full border-b-[1px] border-gray-300">

                            <div className="flex justify-between group cursor-pointer w-[80%] ">

                                <h3 className="text-lg hover:text-2xl transition-all duration-300 font-bold w-[30%] hover:text-[#0668D5]"> Web Development</h3>
                                <p className="text-sm w-[60%] pb-5">
                                    We build fast, secure, and responsive websites tailored to your business needs. Whether it’s an e-commerce platform, 
                                    a corporate website, or a personal portfolio, our expert developers use the latest technologies to create stunning and high-performing web solutions.
                                </p>

                                <img
                                    src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741713448/kun/Portfolio/icons/react-_qnrk0q.png"
                                    alt="Hovered Image"
                                    className="absolute  right-[-14rem]  top-[-40px] transform -translate-x-1/2 w-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>

                        </div>


                        <div className="relative flex flex-col justify-center h-[8vh] w-full border-b-[1px] border-gray-300">

                            <div className="flex justify-between group cursor-pointer w-[80%] ">

                                <h3 className="text-lg hover:text-2xl transition-all duration-300 font-bold w-[30%] hover:text-[#0668D5]"> Social Media Marketing</h3>
                                <p className="text-sm w-[60%] pb-5">
                                    Boost your online presence with our strategic social media marketing services. We create engaging content, manage campaigns,
                                     and analyze insights to help you connect with your audience, increase brand awareness, and drive sales.
                                </p>

                                <img
                                    src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1743083815/kun/Portfolio/icons/social_dsnmwn.png"
                                    alt="Hovered Image"
                                    className="absolute  right-[-15rem]  top-[-40px] transform -translate-x-1/2 w-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>

                        </div>




                    </section>




                </div>























            </div>
        </div>
    )
}

export default Services
