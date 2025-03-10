import React from 'react'

const Blogs = () => {
    return (
        <div className="container">
            <h2 className="">Blogs</h2>
            <p>tadiwanashe tadiwanashe</p>

            <div className='recent_blogs'>
               {allwork.slice(0, 3).map((blog) => {
                return <Link href={`/blog/${blog.slug}`} key={blog._id} className="re_blog">
                    <div className="re_blogimg">
                        <img src={blog.image[0] || '/frontend/public/images/logobgwht.png'} alt="{blog.title}"/>
                    </div>
                </Link>
               })}


            </div>





        </div>

    )
}

export default Blogs
