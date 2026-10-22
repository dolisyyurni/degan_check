import React from 'react'
import { Title } from './ui/text';
import { getLatestBlogs } from '@/sanity/queries';

const LatestBlog = async() => {
    const blogs = await getLatestBlogs()
    return(
        <div className="mb-10 lg:mb-20">
            <Title>LatestBlog </Title>
        </div>
    )
}

export default LatestBlog