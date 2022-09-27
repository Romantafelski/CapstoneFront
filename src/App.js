import './App.css';
import {useState, useEffect, useReducer} from 'react'
import axios from 'axios'

import Edit from './components/Edit'
import NewPost from './components/NewPost'

const App = () => {
  const [posts, setPosts] = useState([])
  const [showPosts, setShowPosts] = useState(true)


  const getPosts = () => {
    axios.get('http://localhost:8000/api/inked').then(
      (response) => setPosts(response.data),
      (err) => console.error(err),
    ).catch((error) => console.error(error))
  }

const handleCreate = (addBlogPost) => {
  axios.post('http://localhost:8000/api/inked', addBlogPost).then(
    ((response) => 
    setPosts([...posts, response.data]))
  )
}

const handleDelete = (deleteBlogPost) => {
  axios.delete('http://localhost:8000/api/inked' + deleteBlogPost.id).then
  ((response) => {
    setPosts(posts.filter(blogPost => blogPost.id !== deleteBlogPost.id))
  })
}

const handleUpdate = (editBlogPost) => {
  axios.put('http://localhost:8000/api/inked' + editBlogPost.id, editBlogPost).then((response) => {
    setPosts(posts.map((blogPost) => {
      return editBlogPost.id !== editBlogPost.id ? blogPost : editBlogPost
      
    }))
  })
}

useEffect(() => {
  getPosts()
},[])

const mainPage = () => {
  setShowPosts()
}

return (
  <>
    <Edit/>
    <NewPost/>

  </>
)

}

export default App;
