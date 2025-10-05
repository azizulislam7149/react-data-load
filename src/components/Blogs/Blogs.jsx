import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {
const useBlogs = useLoaderData();
console.log(useBlogs);

    return (
        <div>
            <h2>My Blogs</h2>
            <div>
                {
                    useBlogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;