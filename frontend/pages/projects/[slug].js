import Head from "next/head";
import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";


export default function ProjectSlug() {
    const router = useRouter();
    const { slug } = router.query;

    const { alldata, loading } = useFetchData(`/api/projects?slug=${slug}`);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!alldata || alldata.length === 0) {
        return <div>Project not found</div>;
    }

    const project = alldata[0]; // Get the first project (assuming slug is unique)

    return (
        <>
            <Head>
                <title>{project.title}</title>
            </Head>

            <div className="mb-20">
                <div className="projectsluimg">
                    <div className="container">
                        <div className="proslugimg">
                            {project.images && project.images[0] ? (
                                <img src={project.images[0]} alt={project.title} className="w-full h-[50vh] md:h-[100vh] object-contain" />
                            ) : (
                                <p>No image available</p>
                            )}
                        </div>




                        <div className=" bg-gray-200 md:h-[50vh] p-5 md:flex">

                            <div className="prjctsluginfo w-full md:w-1/2">
                                <p className="font-bold border-[#0668D5]">Project Description</p>
                                <h1 className="font-bold md:text-2xl">{alldata && alldata[0]?.projectcategory}</h1>
                                <p className="w-full p-0 md:p-5">{project.description}</p>

                                <Link target="_blank" href="{alldata && alldata[0]?.livepreview}"
                                    className="bg-[#0668D5] text-white px-6 py-2 rounded-full w-50 flex items-center justify-center mb-4 md:mb-0 md:mr-4"
                                >Live Preview  <GoArrowUpRight />  </Link>

                            </div>


                            <div className="rightmainproinfo md:pl-10 pt-20">

                                <h3 className="text-[#0668D5] font-bold">Category</h3>
                                <h2 className="font-bold pl-4 text-lg">{alldata && alldata[0]?.projectcategory}</h2>

                                {/* <h3 className="font-bold ">Technologies Used</h3> */}

                                <h3 className="text-[#0668D5] font-bold">Project Date</h3>
                                <p className="font-bold text-2x pl-4 text-lg">{project.createdAt}</p>

                                <h3 className="text-[#0668D5] font-bold">Client</h3>
                                <p className="font-bold text-2x pl-4 text-lg">{project.client}</p>
                            </div>



                        </div>








                    </div>
                </div>
            </div>
        </>
    );
}