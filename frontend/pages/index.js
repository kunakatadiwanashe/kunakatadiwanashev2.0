import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Spinner from "@/components/Spinner";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { FaCalendarDays } from "react-icons/fa6";



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
      setFilteredProjects(alldata.filter(project => project.status === 'publish'));
    } else {
      setFilteredProjects(alldata.filter(project => project.status === 'publish' && project.category[0] === selectedCategory));
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


      <section className="projects">
        <div className="container">
          <div className="project_titles">
            <h2 className="My Work"></h2>
            <p className="">work hard</p>
          </div>

          <div className="project_buttons">
            <button className={selectedCategory === 'ALL' ? 'active' : ''} onClick={() => handleCategoryChange('ALL')}>All</button>
            <button className={selectedCategory === 'Web Dev' ? 'active' : ''} onClick={() => handleCategoryChange('Web Dev')}>Website</button>
            <button className={selectedCategory === 'Apps' ? 'active' : ''} onClick={() => handleCategoryChange('Apps')}>Apps</button>
            <button className={selectedCategory === 'Design' ? 'active' : ''} onClick={() => handleCategoryChange('Design')}>Design</button>
          </div>

          <div className="projects_cards">
            {loading ? <Spinner /> : (
              alldata.slice(0, 3).map((project) => (
                <Link href='/' key={project._id} className="procard">
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

          <h2 className="text-3xl font-bold text-center mb-2">Recent Articles</h2>
          <p className="text-center text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>






          <div className="flex flex-wrap justify-center gap-6 ">


            {allwork.slice(0, 3).map((blog) => {
              return <Link href={`/blogs/${blog.slug}`} key={blog._id} className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white h-[70vh]">

                <div className="w-full h-[50%]">
                <img src={blog.images[0] || '../public/img/noimage.png'} alt={blog.title} className="w-[100%] h-[100%] object-cover" />
                </div>
                <span className="cat">{blog.blogcategory[0]}</span>



                <div className="px-6 py-4">

                  <h2 className="font-bold text-xl mb-2">{blog.title}</h2>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                 <div className="flex pt-3 items-center"> <FaCalendarDays /> <span className="pl-3 font-thin ">{formatDate(new Date(blog.createdAt))}</span></div>
                  <div className="pt-4 pb-2">
                    <a href="#" className="text-orange-500 font-bold">Read More</a>
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