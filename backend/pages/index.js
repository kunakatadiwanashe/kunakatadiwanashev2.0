import Head from "next/head";
import { Bar } from 'react-chartjs-2';
import Loading from "@/components/Loading";
import { IoHome } from "react-icons/io5";
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { useEffect, useState } from "react";
import LoginLayout from "@/components/LoginLayout";
import Link from "next/link";
import { BsPostcard } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { SiBloglovin } from "react-icons/si";
import { FaDiagramProject } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";




// Register Chart.js components outside of the component
ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

export default function Home() {
  const [blogsData, setBlogsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [photosData, setPhotosData] = useState([]);
  const [shopData, setShopData] = useState([]);
  const [loading, setLoading] = useState(true);

  // option with component scope
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Blogs Created Monthly by Year'
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();

        if (Array.isArray(data)) {
          setBlogsData(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchData();
  }, [])

  // data by year and month
  const monthlyData = blogsData.filter(dat => dat.status === "published").reduce((acc, blog) => {
    const year = new Date(blog.createdAt).getFullYear();
    const month = new Date(blog.createdAt).getMonth();
    acc[year] = acc[year] || Array(12).fill(0);
    acc[year][month]++;
    return acc;
  }, {});

  const currentYear = new Date().getFullYear();
  const years = Object.keys(monthlyData);
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const datasets = years.map(year => ({
    label: `${year}`,
    data: monthlyData[year] || Array(12).fill(0),
    backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},0.5)`,
  }));

  const data = {
    labels,
    datasets
  };

  return (
    <LoginLayout>

      <Head>
        <title>kuntechv2.0 Backend</title>
        <meta name="description" content="Blog website backend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className="w-full flex justify-between mt-40">



        <div className="w-1/4 bg-gray-100 h-[100vh] flex flex-col  yel">




          <div className="flex gap-1 flex-col ">  

          <Link href="/blogs" className="flex items-center gap-2 font-bold"><SiBloglovin />  All Blogs </Link>
          <Link href="/blogs/addblog" className="flex items-center gap-2">Add Blog<IoIosAddCircle /> </Link>
          <Link href="/blogs/draft"> Draft Blog </Link>


          </div>



          <div className="flex gap-1 flex-col"> 
          <Link href="/projects" className="flex items-center gap-2 font-bold"><FaDiagramProject /> All Projects </Link>
          <Link href="/projects/addproject"  className="flex items-center gap-2" >  Add Project<IoIosAddCircle /> </Link>
          <Link href="/projects/draft"> Draft Blog</Link>
           </div>




          <div className="flex gap-1 flex-col">  
         
            <Link href="/gallery" className="flex items-center gap-2 font-bold"> <GrGallery /> Gallery  </Link>
            <Link href="/gallery/addphoto" className="flex items-center gap-2">  Add Photos<IoIosAddCircle /> </Link>

          </div>





          <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[35px] w-1/2">
            <Link href="/logout">  Logout </Link>
          </button>

        </div>











        <div className="w-/4 bg-gray-400 h-[100vh]">


        </div>


        {/* 
        <div className="w-[90%] absolute right-10">
          <div className=" w-1/2 h-1/2">
            <Aside />
          </div>

          <div className="dashboard pl-20 pr-20">


            <div className="flex">
              <h1>Dashboard</h1>
              <h3 className="">Admin Panel</h3>
            </div>

            <h4 className=""><IoHome /></h4>



          </div>


          <div className="flex gap-10 justify-between pt-20 bck h-[30vh]">

            <div className="four_card w-40">
              <h2 className="font-bold">total blogs</h2>
              <span className="">{blogsData.filter(dat => dat.status === 'published').length}</span>
            </div>

            <div className="four_card w-40">
              <h2 className="font-bold">total Projects</h2>
              <span className="">11</span>
            </div>

            <div className="four_card w-40">
              <h2 className="font-bold">total Products</h2>
              <span className="">17</span>
            </div>

            <div className="four_card w-40">
              <h2 className="font-bold">Photos</h2>
              <span className="">77</span>
            </div>
          </div>


          <div className="flex flex-sb justify-between p-60">

            <div className="leftyearoverview">
              <div className="flex">
                <h3 className="">Year Overview</h3>
                <h3 className="text-right">{blogsData.filter(dat => dat.status === 'published').length} / 365 <br /> <span className="">Total published</span> </h3>
              </div>
              <Bar data={data} options={options} />
            </div>

            <div className="right_salescont">
              <div className="">
                <h3 className="">blogs by category</h3>

                <div className="blogscategory flex flex-center">
                  <table className="table table-dark table-striped table-hover">
                    <thead>
                      <tr>
                        <td className="">Topic</td>
                        <td className="">Data</td>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Next Js</td>
                        <td>{blogsData.filter(dat => dat.blogcategory[0] === "React JS").length}</td>
                      </tr>

                      <tr>
                        <td>Node Js</td>
                        <td>{blogsData.filter(dat => dat.blogcategory[0] === "Node JS").length}</td>
                      </tr>

                      <tr>
                        <td>Mongo Db</td>
                        <td>{blogsData.filter(dat => dat.blogcategory[0] === "Mongo Db").length}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>


        </div>





 */}






      </section>


    </LoginLayout>
  );
}