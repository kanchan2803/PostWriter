import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            // upload new img
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            // delete prev img 
            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
           
            // const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    // to get input from 2 filds ,watch title and put data in slug 
    // transform slug
    // imp for interviews
    // 
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
            // regex ,pattern matchusing replace spaces with -
            // ^negate 
        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });
        // memory management for optimisation
        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    // final form 
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col space-y-6 bg-white shadow-xl rounded-lg p-8 max-w-2xl mx-auto my-8">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">{post ? "Edit" : "Create"} Post</h2>

            <div className="space-y-4">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="w-full px-3 py-2 border rounded-md"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="w-full px-3 py-2 border rounded-md"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                <Input
                    label="Featured Image :"
                    type="file"
                    className="w-full px-3 py-2 border rounded-md"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="w-full px-3 py-2 border rounded-md"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor="bg-blue-600 hover:bg-blue-700" className="w-full">
                    {post ? "Update" : "Create"}
                </Button>
            </div>
        </form>
    );
}