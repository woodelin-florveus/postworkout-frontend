function CommentCard({id, likes, currentUser, content, updateComment, deleteComment}){


 

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
    



    return(
          <div>
            <li>
              <p>Woodelin</p>
                 <p>{content}</p>
                 <button onClick={updateLike}>Likes: {likes} </button>
                 <button onClick={handleDeleteComment}>delete</button>
             </li>
             </div>
       
    )
}

export default CommentCard;