    import {useEffect, useState} from "react"
    import { Button } from "react-bootstrap"
    import {useLocation} from "react-router-dom"
    import { FaComments } from "react-icons/fa"
    import CommentForm from "./CommentForm"

    
function DisplayBlog({currentUser, blogComment, updateComment, deleteComment}){

    // console.log(blogComment)

const location = useLocation()
const [display, setDisplay] = useState([])
const[userCommentShow, setUserCommentShow] = useState(false)
const {id, title, author, image_url, description} = display








useEffect(() => {
    const id = location.search.slice(7)
    fetch(`http://localhost:3000/workout_posts/${id}`)
    .then(response => response.json())
    .then(setDisplay)
 }, [location]);

 function handleShowComment(){
    setUserCommentShow((userCommentShow) => !userCommentShow)
  }



const allComment = blogComment.map(({id, likes, content}) => {

    function updateLike(){
        fetch(`http://localhost:3000/comments/${id}`, {
            method: 'PATCH', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: content, likes: likes + 1, user_id: currentUser.id})
        })
        .then(response => response.json())
        .then(updateComment)
    }

    function handleDeleteComment(){
        fetch(`http://localhost:3000/comments/${id}`, {
          method: 'DELETE'
        });
        deleteComment(id)
      }


    return (
        <div>
            <h5>Woodelin</h5>
        <p key={id + 100}> {content}</p>
        <Button variant="success" onClick={updateLike}>Likes: {likes}</Button>
        <Button variant="danger" onClick={handleDeleteComment}>Delete</Button>
        {/* <button onClick={updateLike}>Likes: {likes} </button> */}
        {/* <button onClick={handleDeleteComment}>delete</button> */}
        </div>
    )
})


        return(
            <div className="display-container">
                <div className="display-blog-post">
                    <img className="display-image" src={image_url} alt={title} />            
                        <article className="display-details">
                        <h1 className="display-title">{title}</h1>
                        <h3>{author}</h3>
                        <p className="display-text">{description}</p>
                        </article>
            {/* <button className="comment-btn" onClick={handleShowComment}> Leave a comment</button> */}
            <FaComments className="comment-icon" onClick={handleShowComment} />
            {userCommentShow ? <CommentForm blogComment={blogComment}  id={id} setBlogComment={setUserCommentShow} currentUser={currentUser} /> : null}
            
            <div className="comment-section">
                {allComment}
            </div>
            </div>
            </div>
            
        )
    }

export default DisplayBlog;