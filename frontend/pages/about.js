import React from 'react'

import kun from '../public/img/kun.png'
import Contact from '@/components/Contact'

const about = () => {
  return (
<>



<div className="services h-[50vh] p-20">
    <div className="w-2/5">
        <img src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741686176/kun/Portfolio/icons/tadiwa_ahy0a9.png" alt="" className='w-[100%] h-[100%] object-contain'/>
    </div>
    <p className="text-white text-xl pt-6">
    What makes me tick, and code, and eat!
    </p>
</div>


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


<Contact />

















</>
  )
}

export default about
