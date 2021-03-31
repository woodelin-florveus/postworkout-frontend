import FavCards from "./FavCards"

function FavoritePost({favPost, deleteFav}) {

       
     const allFavs = favPost.map(({id, title, author, description, image_url, likes}) => {
    
        return(
            <FavCards 
            key={id}
            id={id}
            title={title}
            image_url={image_url}
            author={author}
            description={description}
            likes={likes}
            deleteFav={deleteFav}
            />
        )
   }) 


    return (
        <div className="main">
        <h1>All Favorites</h1>
        <ul className="main_card">
            {allFavs}
        </ul>
        </div>
    )
}

export default FavoritePost; 