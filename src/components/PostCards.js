import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import EditForm from "./EditForm"


function PostCards({id, title, image_url, author, description, likes, updateBlog, deleteBlog, currentUser}) {


  const[userEditShow, setUserEditShow] = useState(false)
  const history = useHistory()

 function handleDisplay(){
  history.push({
    pathname: '/display',
    search: `?query=${id}`,
  })
 }




  function handleFavorites(){

    fetch("http://localhost:3000/fav_posts", {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({workout_post_id: id, user_id: currentUser.id})
    })
    .then(response => response.json())
    .then(console.log)
    history.push("/favorites")
  }
  
  
   

    function handleShowEdit(){
      setUserEditShow((userEditShow) => !userEditShow)
    }
 
  
  function handleupdateLikes(){
        fetch(`http://localhost:3000/workout_posts/${id}`, {
        method: 'PATCH', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, title, image_url, author, description, likes: likes + 1, user_id: currentUser.id}),
      })
      .then(response => response.json())
      .then(updateBlog)
  }

  function handleDeletePost(){
    fetch(`http://localhost:3000/workout_posts/${id}`, {
      method: 'DELETE'
    });
    deleteBlog(id)
    console.log(id)
  }



    return (
      <div className="card">
      <img className="card-image" src={image_url} alt={title} />
      <h4>{title}</h4>
      <p>Author: {author}</p>
      <p>description: {description}</p>
      <button className="like-btn" onClick={handleupdateLikes}> clap:{likes}</button>
      <button className="fav-btn" onClick={handleFavorites}> add to favorites</button>
      <button className="delete-btn" onClick={handleDeletePost}> delete post</button>
      <button onClick={handleShowEdit}>Edit Post</button>
      <button onClick={handleDisplay}>Read More</button>
      {userEditShow ? <EditForm author={author} description={description} image_url={image_url} title={title} id={id} currentUser={currentUser} /> : null}
      
    
    </div>
    )

}

export default PostCards;