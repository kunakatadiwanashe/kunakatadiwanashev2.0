import React from 'react'

const Services = () => {
    return (
        <div className="services p-6 md:p-12 text-white bg-gray-900">

            <div className="text-left mb-12">
                
                <h1 className="text-3xl md:text-4xl font-bold mt-2">
                    Services<span className="text-[#0668D5] pl-2 md:pl-5">I Offering</span>
                </h1>
                <p className="text-sm md:text-base mt-4 max-w-xl">
                    We provide services designed to enhance business visibility, build a strong online reputation, expand market reach,
                    and boost revenue through effective digital strategies. Our offerings include:
                </p>
            </div>

            <div className="flex flex-col gap-8">

                {/* Service Item */}
                {[
                    {
                        title: 'UI/UX Design',
                        description: 'We create visually stunning and user-friendly digital experiences that captivate your audience. Our UI/UX design services ensure seamless navigation, intuitive layouts, and engaging interfaces that enhance user satisfaction and drive conversions.',
                        image: 'https://res.cloudinary.com/dyikkz1ur/image/upload/v1743082920/kun/Portfolio/icons/ux_d9hncm.png',
                        imageRight: '-15rem',
                        imageWidth: 'w-60'
                    },
                    {
                        title: 'Branding',
                        description: 'Your brand is your identity, and we help you make a lasting impression. From logo design and brand strategy to complete visual identity development, we craft unique and memorable branding that resonates with your target audience.',
                        image: 'https://res.cloudinary.com/dyikkz1ur/image/upload/v1743083814/kun/Portfolio/icons/original-70ca3582560c4735b0dec6f8cbdbd324_czqiph.webp',
                        imageRight: '-14rem',
                        imageWidth: 'w-48'
                    },
                    {
                        title: 'Web Development',
                        description: 'We build fast, secure, and responsive websites tailored to your business needs. Whether it’s an e-commerce platform, a corporate website, or a personal portfolio, our expert developers use the latest technologies to create stunning and high-performing web solutions.',
                        image: 'https://res.cloudinary.com/dyikkz1ur/image/upload/v1741713448/kun/Portfolio/icons/react-_qnrk0q.png',
                        imageRight: '-14rem',
                        imageWidth: 'w-48'
                    },
                    {
                        title: 'Social Media Marketing',
                        description: 'Boost your online presence with our strategic social media marketing services. We create engaging content, manage campaigns, and analyze insights to help you connect with your audience, increase brand awareness, and drive sales.',
                        image: 'https://res.cloudinary.com/dyikkz1ur/image/upload/v1743083815/kun/Portfolio/icons/social_dsnmwn.png',
                        imageRight: '-15rem',
                        imageWidth: 'w-60'
                    },
                ].map((service, idx) => (
                    <div key={idx} className="relative flex flex-col md:flex-row justify-between border-b border-gray-300 pb-4 md:pb-8 group cursor-pointer w-full">

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4 md:gap-8">

                            <h3 className="text-lg md:text-xl font-bold md:w-1/4 group-hover:text-[#0668D5] transition-all duration-300">
                                {service.title}
                            </h3>

                            <p className="text-sm md:text-base md:w-3/4">
                                {service.description}
                            </p>
                        </div>

                        <img
                            src={service.image}
                            alt={service.title}
                            className={`absolute top-[-40px] right-0 md:right-[${service.imageRight}] ${service.imageWidth} opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block`}
                        />
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Services
