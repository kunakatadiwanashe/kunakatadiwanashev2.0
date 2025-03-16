import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Spinner from "@/components/Spinner";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { FaCalendarDays } from "react-icons/fa6";
import About from "@/components/About";
import MySkills from "@/components/MySkills";
import Services from "@/components/Services";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [alldata, setAlldata] = useState([]);
  const [allwork, setAllwork] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectResponse, blogsResponse] = await Promise.all([
          fetch('/api/projects', { cache: 'no-store' }), // Disable caching
          fetch('/api/blogs', { cache: 'no-store' }) // Disable caching
        ]);

        const projectData = await projectResponse.json();
        const blogData = await blogsResponse.json();

        setAlldata(projectData);
        setAllwork(blogData);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const formatDate = (date) => {
    if (!date || isNaN(date)) {
      return '';
    }
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour12: true
    };
    return new Intl.DateTimeFormat('en-us', options).format(date);
  }

  return (
    <>
      <Head>
        <title>Kunaka Tadiwanashe Personal Portfolio</title>
        <meta name="description" content="Kunaka Tadiwanashe Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/public/images/logo.png" />
      </Head>

      <Banner />
      <About />
      <div id="services"><Services /></div>
      <MySkills />

      <section className="projects">
        <div className="container">
          <h2 className="text-center text-2xl font-bold pt-7 pb-10 text-[#fff] hed">Some of my finest work</h2>

          <div className="project_buttons">
            <button className={selectedCategory === 'ALL' ? 'active' : ''} onClick={() => handleCategoryChange('ALL')}>All</button>
            <button className={selectedCategory === 'WebSite Development' ? 'active' : ''} onClick={() => handleCategoryChange('WebSite Development')}>Website</button>
            <button className={selectedCategory === 'App Development' ? 'active' : ''} onClick={() => handleCategoryChange('App Development')}>Apps</button>
            <button className={selectedCategory === 'Website Design' ? 'active' : ''} onClick={() => handleCategoryChange('Website Design')}>Design</button>
          </div>

          <div className="projects_cards">
            {loading ? <Spinner /> : (
              filteredProjects.slice(0, 4).map((project) => (
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
      </section>

      <section className="recentblogs">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center md:text-left md:pl-20">
            <h2 className="text-2xl font-extrabold pt-7 pb-4 text-[#0668D5;] hed">Recent Articles</h2>
            <p className="mb-8 Para text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 ">
            {allwork.slice(0, 3).map((blog) => {
              return <Link href={`/blogs/${blog.slug}`} key={blog._id} className="relative max-w-xs rounded overflow-hidden shadow-lg bg-white w-full md:w-1/2 h-[70vh]">
                <div className="w-full h-[50%]">
                  <img src={blog.images[0] || '../public/img/noimage.png'} alt={blog.title} className="w-[100%] h-[100%] object-cover" />
                </div>
                <span className="cat">{blog.blogcategory[0]}</span>

                <div className="px-6 py-4 w-full">
                  <h2 className="font-bold text-xl mb-2">{blog.title}</h2>
                  <p className="text-gray-700 text-sm line-clamp-3">  {blog.description}      </p>
                  <div className="flex pt-3 items-center"> <FaCalendarDays /> <span className="pl-3 font-thin ">{formatDate(new Date(blog.createdAt))}</span></div>
                  <div className="pt-3 pb-2">
                    <a href="#" className="text-[#066bD5] font-bold">Read More</a>
                  </div>
                </div>
              </Link>
            })}
          </div>
        </div>
      </section>
    </>
  );
}