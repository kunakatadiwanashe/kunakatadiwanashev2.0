{/* 
        <div className="w-1/4 bg-yellow-300 h-[100vh] fixed">

          <ul className="">
            <Link href="/">
              <li className="navactive"><IoHome /> DashBoard</li>
            </Link>
            <li>
              <div className="flex gap-1">
                <BsPostcard />
                Blogs
              </div>


              <ul className="">
                <Link href="/blogs">
                  <li className="navactive">All Blogs</li>
                </Link>
                <Link href="/blogs/addblog">
                  <li className="navactive">Add Blog</li>
                </Link>
                <Link href="/blogs/draft">
                  <li className="navactive">Draft Blog</li>
                </Link>
              </ul>

            </li>

            <li>
              <div className="flex gap-1">
                <BsPostcard />
                Projects
              </div>


              <ul className="">
                <Link href="/projects">
                  <li className="navactive">All Projects</li>
                </Link>
                <Link href="/projects/addproject">
                  <li className="navactive">Add Project</li>
                </Link>
                <Link href="/projects/draft">
                  <li className="navactive">Draft Blog</li>
                </Link>
              </ul>

            </li>

            <li>
              <div className="flex gap-1">
                <BsPostcard />
                Gallery
              </div>


              <ul className="">
                <Link href="/gallery">
                  <li className="navactive">Gallery</li>
                </Link>
                <Link href="/gallery/addphoto">
                  <li className="navactive">Add Photos</li>
                </Link>
              </ul>

            </li>
          </ul>
          <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
            <Link href="/logout">
              Logout
            </Link>
          </button>

        </div>
 */}



// /////////////////////////////////////////////////////////////////////
















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
