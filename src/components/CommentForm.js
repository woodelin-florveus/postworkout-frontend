
import { useState } from "react"

function CommentForm({currentUser, id}){

    const[commentForm, setCommentForm] = useState({content: ""})

    function handleChange(event){
        setCommentForm({...commentForm, [event.target.name]: event.target.value})
        console.log(commentForm)
    }

    function handleComment(event){
        event.preventDefault();

        fetch("http://localhost:3000/comments", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content: commentForm.content, workout_post_id: id, user_id: currentUser.id})
        })
        .then(response => response.json())
        .then(setCommentForm({content: ""}))
    }

  

    return (
        <form onSubmit={handleComment}>
         comment: <textarea placeholder="Join the discussion..." name="content" value={commentForm.content} onChange={handleChange} />
         <input type="submit" value="Create" />
      </form>
    )

}

export default CommentForm;