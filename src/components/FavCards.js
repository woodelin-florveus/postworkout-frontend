

function FavCards({id, title, image_url, author, deleteFav}){

 
    function handleDelete(){    
            fetch(`http://localhost:3000/fav_posts/${id}`, {
              method: 'DELETE'
            });
            deleteFav(id)
        }

       
    return(
        <li key={id}>            
            <img className="card-image" src={image_url} alt={title} />
            <h4>{title}</h4>
            <p>Author: {author}</p>         
            <button className="delete-btn" onClick={handleDelete}> delete post</button>
        </li>
    )

}

export default FavCards;