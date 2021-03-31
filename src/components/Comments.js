import CommentCard from "./CommentCard"

function Comments({ blogComment, updateComment, currentUser, deleteComment}){


    const allComments = blogComment.map(({id, likes, content}) => {
        return(
            <CommentCard 
            key={id}
            id={id}
            likes={likes}
            content={content}
            currentUser={currentUser}
            updateComment={updateComment}
            deleteComment={deleteComment}
            />
        )
    })
    

   
    return (
        <div className="Comment-Container">
       {allComments}
       </div>
    )
}




export default Comments;
