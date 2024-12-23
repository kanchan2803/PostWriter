import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    if (!post) {
        return (
            <div className="w-full py-8 mt-4 text-center animate-fadeIn">
                <Container>
                    <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-teal-500"></div>
                        <p className="text-xl mt-4 text-gray-600">Loading post...</p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="py-8 animate-fadeIn">
            <Container>
                <div className="w-full flex flex-col items-center">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl shadow-lg mb-4 max-w-4xl h-96
                        object-cover transition-transform duration-300 hover:scale-105"
                    />

                    <h1 className="text-4xl font-bold mt-4 text-center text-teal-700">{post.title}</h1>
                    <div className="flex justify-center items-center mt-4 space-x-4">
                
                    {isAuthor && (
                        <>
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-teal-500 hover:bg-teal-600 " >
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500 hover:bg-red-600" onClick={deletePost}>
                                Delete
                            </Button>
                        </>
                    )}
                </div>
                <div className="browser-css mt-8 prose lg:prose-xl max-w-4xl">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    );
}