import {useState} from "react"

function EditForm({author, title, image_url, id, description, currentUser}){

       


        const[editPost, setEditPost] = useState({title: title, author: author, image_url: image_url, description: description})


        function handleUpdate(event){
                event.preventDefault();

                fetch(`http://localhost:3000/workout_posts/${id}`, {
                method: 'PATCH',
                headers: {
                        'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({title: editPost.title, author: editPost.author, image_url: editPost.image_url, description: editPost.description, user_id: currentUser.id})
                }) 
                .then(response => response.json())
                .then(setEditPost({title: "", author: "", image_url: "", description: ""}))
        }

        function handleChange(event){
                setEditPost({...editPost,
                [event.target.name]: event.target.value})

                console.log(editPost)
        }


        return(
                <form onSubmit={handleUpdate} >
                <input type="text" placeholder="Title" name="title" value={editPost.title} onChange={handleChange} />
                <input type="text" placeholder="Image" name="image_url" value={editPost.image_url} onChange={handleChange}/>
                <input type="text" placeholder="Author" name="author" value={editPost.author} onChange={handleChange}/>
                <textarea className="edit-area" placeholder="Share your masterpiece here..." name="description" value={editPost.description} onChange={handleChange} />
                <input type="submit" value="Update" />
            </form>
        )
}

export default EditForm;