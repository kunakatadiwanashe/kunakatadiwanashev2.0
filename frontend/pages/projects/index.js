import Head from "next/head";
import { useState, useEffect } from "react";
import useFetchData from "@/hooks/useFetchData";
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import Spinner from "@/components/Spinner";


export default function projects() {

    const { alldata, loading } = useFetchData('/api/projects');
    const publishedData = alldata.filter(ab => ab.status === 'published');
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [filteredProjects, setFilteredProjects] = useState([]);


    useEffect(() => {
        if (selectedCategory === 'ALL') {
            setFilteredProjects(alldata.filter(pro => pro.status === 'published'));
        } else {
            setFilteredProjects(alldata.filter(pro => pro.status === 'published' && pro.projectcategory.includes(selectedCategory)));
        }
    }, [selectedCategory, alldata]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
      }


    return <>


        <Head className="">
            <title>My Finest Work</title>
        </Head>


        <div className="projectpage">
            <div className="projects">
                <div className="container">
                    <div className="project_title text-white text-center">
                        <h2 className="hed">my finest work</h2>
                        <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>

                    <div className="project_buttons">
                        <button className={selectedCategory === 'ALL' ? 'active' : ''} onClick={() => handleCategoryChange('ALL')}>All</button>
                        <button className={selectedCategory === 'WebSite Development' ? 'active' : ''} onClick={() => handleCategoryChange('WebSite Development')}>Website</button>
                        <button className={selectedCategory === 'App Development' ? 'active' : ''} onClick={() => handleCategoryChange('App Development')}>Apps</button>
                        <button className={selectedCategory === 'Website Design' ? 'active' : ''} onClick={() => handleCategoryChange('Website Design')}>Design</button>
                    </div>


                    <div className="projects_cards">
                        {loading ? <Spinner /> : (
                            filteredProjects.map((project) => (
                                <Link href={`/projects/${project.slug}`} key={project._id} className="procard">
                                    <div className="proimgbox">
                                        <img src={project.images[0]} alt={project.title} />
                                    </div>
                                    <div className="procontentbox">
                                        <h2 className=""> {project.title} </h2>
                                        <GoArrowUpRight />
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>



                </div>
            </div>

        </div>



    </>
}