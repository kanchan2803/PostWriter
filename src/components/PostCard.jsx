import React from 'react'
// info will come from service 
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform'>
            <div className='relative h-48'>
                {/* passing id to get preview of image */}
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' />

            </div>
            <h2
            className='text-xl font-semibold mb-2 text-teal-700'
            >{title}</h2>
            </div>
    </Link>
  )
}


export default PostCard