
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

      <div className="row">
      <div className="leftcolumn">
        <div className="main-card">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div className="fakeimg"><img src="images/image_4.jpg" alt="header" /></div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
        <div className="main-card">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div className="fakeimg"><img src="images/image_2.jpg" alt="header" /></div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>
      <div className="rightcolumn">
        <div className="main-card">
          <h2>About Me</h2>
          <div className="fakeimg"><img src="images/image_5.jpg" alt="header" /></div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        </div>
        <div className="main-card">
          <h3>Popular Post</h3>
          <div className="fakeimg"><img src="images/image_6.jpg" alt="header" /></div>
        </div>
        <div className="main-card">
          <h3>Follow Me</h3>
          <p>Some text..</p>
        </div>
      </div>
      
        <div className="create-container">
            <h2>Share the knowledge </h2>
            <div className="post-image"> <img src="images/image_4.jpg" alt="header" /></div>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" value={blogForm.title} onChange={handleChange} />
        <input type="text" placeholder="Image" name="image_url" value={blogForm.image_url} onChange={handleChange} />
        <input type="text" placeholder="Author" name="author" value={blogForm.author} onChange={handleChange} />
        <textarea className="create-area" placeholder="Share your masterpiece here..." name="description" value={blogForm.description} onChange={handleChange} />
        <input type="submit" value="Create" />
    </form>
        </div>
        </div>
    )
}


export default PostForm;
