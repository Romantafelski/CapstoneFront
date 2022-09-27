import { useState } from "react";

const Edit = (props) => {
    const [blogPost, setBlogPost] = useState({ ...props.blogPost })

    const handleChange = (event) => {
        setBlogPost({ ...blogPost, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(blogPost)
    }
}

export default Edit