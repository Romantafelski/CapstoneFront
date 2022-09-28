import { useState } from "react";

const NewPost = (props) => {
    let emptyPosts = {
        image: "",
        artist: "",
        description: "",
    };

    const [blogPost, setBlogPost] = useState(emptyPosts);

    const handleChange = (event) => {
        setBlogPost({ ...blogPost, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleCreate(blogPost);
        setBlogPost({
            image: "",
            artist: "",
            description: "",
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="image">Image: </label>
                <input type="text" name="image" value={blogPost.image} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="artist">Artist: </label>
                <input type="text" name="artist" value={blogPost.artist} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" value={blogPost.description} onChange={handleChange} />
                <br />
                <br />
                <input type="submit" />
            </form>
        </>
    );
};

export default NewPost
