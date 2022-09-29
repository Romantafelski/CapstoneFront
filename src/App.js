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
    <div>
      <NewPost handleCreate={handleCreate} />
      <div>
        {posts.map((blogPost) => {
          return (
            <>
            <div>
            <br/>
            <br/>
            <div className='card-flex-article'>
              <img className='image is-32x32'  id='responsive-img'  src={blogPost.image} alt="..." />
              </div>
              <p>{blogPost.artist}</p>
              <br/>
              <p>{blogPost.description}</p>
              <br/>
              <Edit handleUpdate={handleUpdate} />
              <br/>
              <button className='.btn' onClick={() => {handleDelete(blogPost)}} value={blogPost.id}>Delete</button>
        </div>
              </>
          )
        })}
      </div>
      </div>
    </>
  )
}



export default App;
