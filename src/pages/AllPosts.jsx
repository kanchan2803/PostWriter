import {useState,useEffect} from 'react'
import { Container,PostCard } from '../components'
import appwriteService from "../appwrite/config";

export default function AllPosts() {
    const [posts,setPosts] =useState([])
    useEffect(()=>{}, [])
    appwriteService.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })


    return (
        <div className='w-full py-8'>
          <Container>
            <div className='flex flex-wrap -mx-4'>
                {posts.map((post) => (
                    <div key={post.$id} className='w-full sm:w-1/2 lg:w-1/3 p-4'>
                    <PostCard {...post} />
                </div>

                ))}
            </div>
            </Container>  
        </div>
    )
}
