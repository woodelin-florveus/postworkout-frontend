
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { IoLogoInstagram } from "react-icons/io"
import { GrFacebook } from "react-icons/gr"
import { FiTwitter } from "react-icons/fi"
import { FaSnapchatGhost } from "react-icons/fa"
import { AiOutlineGithub } from "react-icons/ai"

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
          <h2>Cardio that works for anyone</h2>
          <h5>Fasting is not the only option, Dec 7, 2017</h5>
          <div className="fakeimg"><img src="images/image_4.jpg" alt="header" /></div>
          <h5>Dane Cook Credits Swimming Workouts for Getting Fit</h5>
          <p>Dane Cook has enjoyed an impressively chameleon-like run as an actor and comedian in his nearly 30 years of doing comedy. In a recent Instagram post, Cook looked back at just a handful of the myriad roles he's played over that timespan, which have included everything from a break-up artist in Good Luck Chuck to an irreverent restaurant chef in Waiting.</p>
        </div>
        <div className="main-card">
          <h2>Gym trainers are needed more than ever</h2>
          <h5>Trainers are the gatway to your goals, Sep 2, 2017</h5>
          <div className="fakeimg"><img src="images/image_2.jpg" alt="header" /></div>
          <h5>A Top Trainer Shared His Best Advice for Building Bigger Quads</h5>
          <p>There's nothing wrong with a traditional wide stance if you're squatting heavy, but that approach can limit your movement options. "If you squat like this all the time, I suggest you change it up," says Cavaliere. "Neurologically, you're going to benefit from this, because the recruitment pattern you'll develop from this squat is going to be different."</p>
        </div>
      </div>
      <div className="rightcolumn">
        <div className="main-card">
          <h2 className="pop-post">About Me</h2>
          <div className="fakeimg"><img src="images/image_9.jpeg" alt="header" /></div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        </div>
        <div className="main-card">
          <h3 className="pop-post">Popular Post</h3>
          <div className="fakeimg"><img src="images/image_6.jpg" alt="header" /></div>
        </div>
        <div className="main-card">
          <h3 className="pop-post">Popular Post</h3>
          <div className="fakeimg"><img src="https://blog.myfitnesspal.com/wp-content/uploads/2018/07/What%E2%80%99s-the-Best-Form-of-Cardio-for-Fat-Loss.jpg" alt="header" /></div>
        </div>
        <div className="main-card">
          <h3 className="pop-post">Popular Post</h3>
          <div className="fakeimg"><img src="https://images.dickssportinggoods.com/is/image/dksfed/CLP_007_Fitness_HomeGym_0105_S1_PullUp" alt="header" /></div>
        </div>
        <div className="main-card">
          <h3 className="pop-post">Follow Me</h3>
          <ul className="social-icons">
            <li><IoLogoInstagram /></li>
            <li><GrFacebook /></li>
            <li><FiTwitter /></li>
            <li><FaSnapchatGhost /></li>
            <li><a href="https://github.com/woodelin-florveus?tab=repositories"><AiOutlineGithub /></a></li>
          </ul>
        </div>
      </div>
      
        <div className="create-container">
            <h2>Share the knowledge </h2>
            <div className="post-image"> <img src="images/image_4.jpg" alt="header" /></div>
    <form className="blog_form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" value={blogForm.title} onChange={handleChange} />
        <input type="text" placeholder="Image" name="image_url" value={blogForm.image_url} onChange={handleChange} />
        <input type="text" placeholder="Author" name="author" value={blogForm.author} onChange={handleChange} />
        <textarea className="create-area" placeholder="Share your masterpiece here..." name="description" value={blogForm.description} onChange={handleChange} />
        <input className="sub-button" type="submit" value="Create" />
    </form>
        </div>
        </div>
    )
}


export default PostForm;
