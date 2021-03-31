import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import EditForm from "./EditForm"
// Icons
import { AiOutlineLike } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { RiDeleteBin2Line } from "react-icons/ri"
import { RiFileEditLine } from "react-icons/ri"


function PostCards({id, title, image_url, author, description, likes, updateBlog, deleteBlog, currentUser, setFavPost}) {


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

      <article>
         {/* <li className="card_item"> */}
          <div className="card">
          <div className="card_image"><img src={image_url} alt={title} /></div>
          <div className="card_content">
          <h5 className="card_title">{title}</h5>
            {/* <h4 className="card_author">{author}</h4> */}
            <span>{author}</span>
            <h4> Dec 7, 2017</h4>
            <div className="icon-container">
            <span className="like" onClick={handleupdateLikes}>
              <AiOutlineLike />:{likes}
            </span>
              <span className="fav" onClick={handleFavorites}>
              <AiOutlineStar />
            </span>
            <span className="delete" onClick={handleDeletePost}>
              <RiDeleteBin2Line />
            </span>
            <span className="edit" onClick={handleShowEdit}>
              <RiFileEditLine />
            </span>
                {userEditShow ? <EditForm author={author} description={description} image_url={image_url} title={title} id={id} currentUser={currentUser} /> : null}
                </div>
                <button className="btn-read" onClick={handleDisplay}>Read More</button>
          </div>
            </div>
           {/* </li> */}
          </article>
    )

}

export default PostCards;