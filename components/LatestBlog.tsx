import React from 'react'
import { Title } from './ui/text';

const LatestBlog = async() => {
    const blogs = await getLatestBlogs()
    return(
        <div className="mb-10 lg:mb-20">
            <Title>LatestBlog</Title>
        </div>
    )
}

export default LatestBlog