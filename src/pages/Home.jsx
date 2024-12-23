import {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import {motion} from 'framer-motion'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    return (
        <div className='w-full py-8 animate-fadeIn'>
            <Container>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-teal-700 mb-4">Welcome to PostWriter</h1>
                    <p className="text-xl text-gray-600">Unleash your creativity, one post at a time.</p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex justify-center mb-12"
                >
                    <img src="public\assets\home.png" alt="Writing Illustration" className="rounded-lg shadow-lg md:max-w-md" />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-semibold text-teal-600 mb-4">Why Choose PostWriter?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-teal-500 mb-2">Easy to Use</h3>
                            <p className="text-gray-600">Intuitive interface for seamless writing experience</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-teal-500 mb-2">Beautiful Design</h3>
                            <p className="text-gray-600">Showcase your content in a visually appealing format</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-teal-500 mb-2">Secure Platform</h3>
                            <p className="text-gray-600">Your content is safe and protected with us</p>
                        </div>
                    </div>
                </motion.div>

                <h2 className="text-3xl font-semibold text-teal-700 mb-8 text-center">Latest Posts</h2>
                {posts.length === 0 ? (
                    <div className="text-center text-xl text-gray-600">
                        No posts found. Be the first to create one!
                    </div>
                ) : (
                    <div className='flex flex-wrap -mx-4'>
                        {posts.map((post, index) => (
                            <motion.div 
                                key={post.$id} 
                                className='w-full sm:w-1/2 lg:w-1/3 p-4'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <PostCard {...post} />
                            </motion.div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Home