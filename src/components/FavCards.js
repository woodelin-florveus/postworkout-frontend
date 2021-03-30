import { RiDeleteBin2Line } from "react-icons/ri"

function FavCards({id, title, image_url, author, deleteFav}){

 
    function handleDelete(){    
            fetch(`http://localhost:3000/fav_posts/${id}`, {
              method: 'DELETE'
            });
            deleteFav(id)
        }

       
    return(
        <li key={id} className="card_item">
            <div className="card">            
            <div className="card_image"><img src={image_url} alt={title} /></div>
            <div className="card_content">
            <h3 className="card_title">{title}</h3>
            <h4 className="card_author">{author}</h4> 
            <h4> Dec 7, 2017</h4>    
            <span className="delete" onClick={handleDelete}>
              <RiDeleteBin2Line />
            </span>    
            {/* <button className="delete-btn" onClick={handleDelete}> delete post</button> */}
            </div>
            </div>
        </li>
    )

}

export default FavCards;