    import {useEffect, useState} from "react"
    import {useLocation} from "react-router-dom"
    import CommentForm from "./CommentForm"
    
function DisplayBlog({currentUser, blogComment}){


const location = useLocation()

const [display, setDisplay] = useState([])

const[userCommentShow, setUserCommentShow] = useState(false)

const {id, title, author, image_url, description} = display

useEffect(() => {
    // console.log(location.pathname); 
    // console.log(location.search); 

    const id = location.search.slice(7)
    fetch(`http://localhost:3000/workout_posts/${id}`)
    .then(response => response.json())
    .then(setDisplay)
 }, [location]);

 function handleShowComment(){
    setUserCommentShow((userCommentShow) => !userCommentShow)
  }


const allComment = blogComment.map((comment) => {
    return (
        <p key={comment.id + 100}> {comment.content} </p>
    )
})

        return(
            <div>
               <p>hello</p>
            <h1>{title}</h1>
            <img className="display-image" src={image_url} alt={title} />
            <p>{author}</p>
            <p>{description}</p>
            <button className="comment-btn" onClick={handleShowComment}> comment</button>
            {userCommentShow ? <CommentForm blogComment={blogComment}  id={id} setBlogComment={setUserCommentShow} currentUser={currentUser} /> : null}
            <div>Comments: {allComment}</div>
            </div>
        )
    }

export default DisplayBlog;