import React, { useState, useEffect } from "react"

import { Switch, Route } from "react-router-dom"
import Signup from "./Signup"
import Login from "./Login"
import Profile from "./Profile"
import Nav from "./Nav"
import PostForm from "./PostForm"
import PostCollection from "./PostCollection"
import FavoritePost from "./FavoritePost"
import Comments from "./Comments"
import About from "./About"
import DisplayBlog from "./DisplayBlog"
import Search from "./Search"
import Main from "./Main"





function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [blogPost, setBlogPost] = useState([])
  const [blogComment, setBlogComment] = useState([])
  const[favPost, setFavPost] = useState([])
  const [search, setSearch] = useState("")



  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch("http://localhost:3000/myself", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => response.json())
      .then(setCurrentUser)
    }
  }, [])

  
  useEffect(() => {
    fetch("http://localhost:3000/workout_posts")
    .then(response => response.json())
    .then(setBlogPost)
  }, [])



  useEffect(() => {
    fetch("http://localhost:3000/comments")
    .then(response => response.json())
    .then(setBlogComment)
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/fav_posts")
    .then(response => response.json())
    .then(setFavPost)
},[])


  function handleUpdateBlog(newBlog){
    const blogId = blogPost.map((blog) => blog.id === newBlog.id ? newBlog : blog)
    setBlogPost(blogId)
  }

  function handleUpdateComment(newBlog){
    const blogId = blogComment.map((blog) => blog.id === newBlog.id ? newBlog : blog)
    setBlogComment(blogId)
  }

  function handleDeleteComment(id){
    const blogId = blogComment.filter((blog) => blog.id !== id)
    setBlogComment(blogId)
  }


  function handleDeleteBlog(id){
    const blogId = blogPost.filter((blog) => blog.id !== id)
    setBlogPost(blogId)
  }
  function handleDeleteFav(id){
    const blogId = favPost.filter((blog) => blog.id !== id)
    setFavPost(blogId)
  }

  const displayBlog = blogPost.filter((blog) => blog.title.toLowerCase().includes(search.toLocaleLowerCase())) 



  return (
    <div className="App">


      
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
            {currentUser ? <h3 className="username">Welcome, {currentUser.name}</h3> : <h1>Please Login or Signup</h1>}
        <Switch>
        <Route path="/signup">
            <Signup setCurrentUser={setCurrentUser}/>
          </Route>
        <Route path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/profile">
            { currentUser && <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          </Route>
          <Route path="/home">
            <PostForm blogPost={blogPost} setBlogPost={setBlogPost} currentUser={currentUser} />
          </Route>
          <Route path="/collection">
          <Search search={search} setSearch={setSearch} />
            <PostCollection blogPost={displayBlog} setBlogPost={setBlogPost} blogComment={blogComment} setBlogComment={setBlogComment} updateBlog={handleUpdateBlog} deleteBlog={handleDeleteBlog} currentUser={currentUser} favPost={favPost} setFavPost={setFavPost} />
          </Route>
          <Route path="/favorites">
            <FavoritePost favPost={favPost} deleteFav={handleDeleteFav} />
          </Route>
          <Route path="/comments">
            <Comments blogComment={blogComment} updateComment={handleUpdateComment} deleteComment={handleDeleteComment} currentUser={currentUser} />
          </Route>
          <Route path="/display">
            <DisplayBlog currentUser={currentUser} blogComment={blogComment} deleteComment={handleDeleteComment} updateComment={handleUpdateComment}  />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        
    </div>
  );
}

export default App;
