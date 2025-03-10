import React, { useState, useEffect } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import Spinner from './Spinner' // Assuming you have a Spinner component

const Projects = ({ alldata }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (alldata && alldata.length > 0) {
            setLoading(false);
        }
    }, [alldata]);

    return (
        <div className="projects">
            <div className="container">

                <div className="project-title">
                    <h2 className="">My Recent Work</h2>
                    <p className="">
                        A Frontend focused Web Developer building
                        the Frontend of Websites and
                        Web Applications that leads to the success of the overall product
                    </p>
                </div>

                <div className="projects_buttons">
                    <button className="active">All</button>
                    <button>Website</button>
                    <button>Apps</button>
                    <button>Designs</button>
                    <button>PhotoShoot</button>
                </div>

                <div className="projects_cards">
                    {loading ? <Spinner /> : (
                        alldata.slice(0, 6).map(pro => (
                            <div className="procard" key={pro._id}>
                                <div className="proImgbox">
                                    <img src={pro.projectimage} alt={pro.projectname} />
                                </div>
                                <div className="procontentbox">
                                    <h2>{pro.projectname}</h2>
                                    <GoArrowUpRight />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects