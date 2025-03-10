import Blog from "@/components/Blog";
import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import LoginLayout from "@/components/LoginLayout";

export default function EditBlog() {
    const router = useRouter();
    const { id } = router.query;

    const [blogInfo, setBlogInfo] = useState(null);

    useEffect(() => {
        if (!id) {
            return;
        } else {
            axios.get('/api/blogs?id=' + id).then(response => {
                setBlogInfo(response.data);
            }).catch(error => {
                console.error('Error fetching blog:', error);
            });
        }
    }, [id]);

    return (
        <LoginLayout>
            <Head>
                <title>Edit Blog</title>
            </Head>

            <div className="blogpage">
                <div>
                    <h2>Edit {blogInfo?.title}</h2>
                    <h3>Admin</h3>
                </div>

                <div className="mt3-">
                    {blogInfo && <Blog {...blogInfo} />}
                </div>
            </div>
        </LoginLayout>
    );
}