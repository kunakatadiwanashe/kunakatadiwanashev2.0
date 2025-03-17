
import Blog from '@/components/Blog';
import { SiBloglovin } from 'react-icons/si';
export default function Addblog() {



    return <>
        <div className="addblogspage">
            <div className="titledashboard flex flex-sb">

                <div className="flex items-center">
                    <SiBloglovin className='size-20' /><p className="text-3xl font-bold">AddBlog</p>
                </div>

            </div>
            <div className="blogsadd flex items-center justify-center">
                <Blog />
            </div>
        </div>

    </>
}