import './App.css';
import {useState, useEffect} from 'react'

const App = () => {
  const [posts, setPosts] = useState([])


const getPosts = () => {
  axios.get('http://localhost:8000/api/inked').then(
    (response) => setPosts(response.data),
    (err) => console.error(err),
  ).catch((error) => console.error(error))
}

const handleCreate = (addBlogPost) => {
  axios.post('http://localhost:8000/api/inked', addPost).then(
    ((response) => 
    setPosts([...posts, response.data]))
  )
}

const handleDelete = (deleteBlogPost) => {
  axios.delete('http://localhost:8000/api/inked' + deletePost.id).then
  ((response) => {
    setPosts(posts.filter(blogPost => blogPost.id !== deleteBlogPost.id))
  })
}

const handleUpdate = (editBlogPost) => {
  axios.put('http://localhost:8000/api/inked' + editBlogPost.id, editBlogPost).then((response) => {
    return editBlogPost.id !== editBlogPost.id ? blogPost : editBlogPost
  })
}




}

export default App;
