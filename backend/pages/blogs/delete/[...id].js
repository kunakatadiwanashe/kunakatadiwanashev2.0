import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'

export default function DeleteProduct() {

    const router = useRouter();
    const { id } = router.query;
    const [productInfo, setProductInfo] = useState(null);

    useEffect(() => {
        if (!id) {
            return;
        }
        console.log('Fetching blog with ID:', id);
        axios.get('/api/blogs?id=' + id).then(response => {
            setProductInfo(response.data);
        }).catch(error => {
            console.error('Error fetching product:', error);
        });
    }, [id]);

    function goBack() {
        router.push('/blogs');
    }

    async function deleteBlog() {
        console.log('Deleting blog with ID:', id);
        await axios.delete('/api/blogs?id=' + id).then(response => {
            console.log('Blog deleted successfully:', response.data);
            goBack();
        }).catch(error => {
            console.error('Error deleting product:', error);
        });
    }

    return <>
        <Head>
            <title>Delete Blog</title>
        </Head>

        <div className='blogpage'>
            <div className='deletecard'>
                <h1>Are you sure you want to delete this blog?</h1>
                {productInfo && <p>{productInfo.title}</p>}
                <button onClick={deleteBlog}>Delete</button>
                <button onClick={goBack}>Cancel</button>
            </div>
        </div>
    </>
}