import PostCards from "./PostCards"


function PostCollection({ blogPost, updateBlog, deleteBlog, currentUser, blogComment, setBlogComment, favPost, setFavPost}) {

  

    const allPosts = blogPost.map(({id, title, image_url, author, description, likes, comments}) => {
        return(
            <PostCards     
        key={id}
        id={id}
        title={title}
        image_url={image_url}
        author={author}
        description={description}
        likes={likes}
        updateBlog={updateBlog}
        deleteBlog={deleteBlog}
        currentUser={currentUser}
        blogComment={blogComment}
        setBlogComment={setBlogComment}
        comments={comments}     
        setFavPost={setFavPost}
        favPost={favPost}
        />
        )
    })

    return (
        <div>
        <h1>All Workout Posts</h1>
        <div className="workout-container">
            
            {allPosts}
        </div>
        </div>
    )
}

export default PostCollection; 