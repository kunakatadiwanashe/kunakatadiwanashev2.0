import Head from "next/head";
import { Bar } from 'react-chartjs-2';
import Loading from "@/components/Loading";
import { IoHome } from "react-icons/io5";
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { useEffect, useState } from "react";
import LoginLayout from "@/components/LoginLayout";

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
      <>
        <Head>
          <title>kuntechv2.0 Backend</title>
          <meta name="description" content="Blog website backend" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div className="dashboard">
          <div className="titledashboard flex flex-sb">
            <h1>Dashboard</h1>
            <h3 className="">Admin Panel</h3>
          </div>
          <div className="breadcrumb">
            <h4 className=""><IoHome /></h4>
          </div>
        </div>

        <div className="topfourcards flex flex-sb">
          <div className="four_card">
            <h2 className="">total blogs</h2>
            <span className="">{blogsData.filter(dat => dat.status === 'published').length}</span>
          </div>

          <div className="four_card">
            <h2 className="">total Projects</h2>
            <span className="">11</span>
          </div>

          <div className="four_card">
            <h2 className="">total Products</h2>
            <span className="">17</span>
          </div>

          <div className="four_card">
            <h2 className="">Photos</h2>
            <span className="">77</span>
          </div>
        </div>

        <div className="year_overview flex flex-sb">
          <div className="leftyearoverview">
            <div className="flex flex-sb">
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
      </>
    </LoginLayout>
  );
}