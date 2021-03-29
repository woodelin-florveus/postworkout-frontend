
import React, { useState } from "react"
import { useHistory } from "react-router-dom"

function PostForm({ blogPost, setBlogPost, currentUser}){

   console.log(currentUser)

    const [blogForm, setBlogForm] = useState({ title: "", image_url: "", author: "Woodelin", description: ""})
    const history = useHistory();


    function handleChange(event){
        setBlogForm({...blogForm, [event.target.name]: event.target.value})
    }

   
    function handleSubmit(event){
        event.preventDefault();
        
fetch('http://localhost:3000/workout_posts', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },  
  body: JSON.stringify({title: blogForm.title, image_url: blogForm.image_url, author: blogForm.author, description: blogForm.description, user_id: currentUser.id}),
})
.then(response => response.json())
.then(blogData => {
  const newBlogData = [...blogPost, blogData]
    setBlogPost(newBlogData)
    setBlogForm({ title: "", image_url: "", author: "Woodelin", description: ""})
    history.push("/collection")

})

    }




    return(
        <div className="create-container">
            <h2>Create Post</h2>
            <div className="post-image"> <img src="images/image_4.jpg" alt="header" /></div>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" value={blogForm.title} onChange={handleChange} />
        <input type="text" placeholder="Image" name="image_url" value={blogForm.image_url} onChange={handleChange} />
        <input type="text" placeholder="Author" name="author" value={blogForm.author} onChange={handleChange} />
        <textarea className="create-area" placeholder="Share your masterpiece here..." name="description" value={blogForm.description} onChange={handleChange} />
        <input type="submit" value="Create" />
    </form>
        </div>
    )
}


export default PostForm;
