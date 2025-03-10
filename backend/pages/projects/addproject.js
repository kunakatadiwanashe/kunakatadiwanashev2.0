import Project from '@/components/Project';
import { SiBloglovin } from 'react-icons/si';




export default function AddProject() {



    return <>
        <div className="addblogspage">
            <div className="titledashboard flex flex-sb">
                <div className="">
                    <h2>Add Blog</h2>
                    <h3>Admin Panel</h3>
                </div>

                <div className="breadcrumb">
                    <SiBloglovin /><p className="">AddBlog</p>
                </div>

            </div>
            <div className="blogsadd">
                <Project />
            </div>
        </div>

    </>
}