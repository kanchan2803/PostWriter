import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaDiscord} from 'react-icons/fa'

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-teal-700 to-blue-700 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">PostWriter</h3>
                        <p className="mb-4">Empowering writers to share their stories with the world.</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-teal-300 transition-colors duration-300">Home</Link></li>
                            <li><Link to="/all-posts" className="hover:text-teal-300 transition-colors duration-300">All Posts</Link></li>
                            <li><Link to="/add-post" className="hover:text-teal-300 transition-colors duration-300">Add Post</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold ">Contact Us</h4>
                        <ul className="flex justify-center">
                            <li className="flex items-center py-4">
                                <FaEnvelope className="mr-2 " />
                                <a href="mailto:info@postwriter.com" className="hover:text-teal-300 transition-colors duration-300">info@postwriter.com</a>
                            </li>
                        </ul>
                    
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="#" className="text-2xl hover:text-teal-300 transition-colors duration-300">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-2xl hover:text-teal-300 transition-colors duration-300">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-2xl hover:text-teal-300 transition-colors duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-2xl hover:text-teal-300 transition-colors duration-300">
                                <FaDiscord />
                            </a>
                    </div>
                </div>
                </div>
                <div className="mt-8 pt-8 border-t border-teal-600 text-center">
                    <p>&copy; 2024 PostWriter. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

