import { useHistory } from "react-router-dom"
import { RiDeleteBin2Line } from "react-icons/ri"

function FavCards({id, title, image_url, author, deleteFav}){

  
    const history = useHistory()

    function handleDelete(){    
            fetch(`http://localhost:3000/fav_posts/${id}`, {
              method: 'DELETE'
            });
            deleteFav(id)
        }

        function handleDisplay(){
          history.push({
            pathname: '/display',
            search: `?query=${id}`,
          })
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
            <button className="btn-read" onClick={handleDisplay}>Read More</button>
            </div>
            </div>
        </li>
    )

}

export default FavCards;