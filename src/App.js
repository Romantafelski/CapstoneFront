import './App.css';
import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'

import Edit from './components/Edit'
import NewPost from './components/NewPost'

const App = () => {
  const [posts, setPosts] = useState([])
  // const [editFrom, setEditForm] = useState(false)


  const getPosts = () => {
    axios.get('http://localhost:8000/api/tattoo').then(
      (response) => setPosts(response.data),
      (err) => console.error(err),
    ).catch((error) => console.error(error))
  }

  const handleCreate = (addBlogPost) => {
    // let nextId = products[products.length - 1].id + 1
    axios.post('http://localhost:8000/api/tattoo', addBlogPost)
      .then((response) => {
        // addItem.id = nextId
        setPosts([...posts, response.data])
      })
  }

  const handleDelete = (deleteBlogPost) => {
    axios.delete('http://localhost:8000/api/tattoo/' + deleteBlogPost.id).then
      ((response) => {
        setPosts(posts.filter(blogPost => blogPost.id !== deleteBlogPost.id))
      })
  }

  const handleUpdate = (editBlogPost) => {
    axios.put('http://localhost:8000/api/tattoo' + editBlogPost.id, editBlogPost).then((response) => {
      setPosts(posts.map((blogPost) => {
        return editBlogPost.id !== editBlogPost.id ? blogPost : editBlogPost

      }))
    })
  }

  useEffect(() => {
    getPosts()
  }, [])

  // const showEditForm = () => {
  //   setEditForm(false)
  // }

  return (
    <>
      <NewPost handleCreate={handleCreate} />
      <div>
        {posts.map((blogPost) => {
          return (
            <>
            <br/>
            <br/>
              <img src={blogPost.image} alt="..." />
              <p>{blogPost.artist}</p>
              <p>{blogPost.description}</p>
              {/* <button onClick={showEditForm}>Edit</button> */}
              <button onClick={() => {handleDelete(blogPost)}} value={blogPost.id}>Delete post</button>
              <Edit handleUpdate={handleUpdate} /></>
          )
        })}
      </div>
    </>
  )
}



export default App;
