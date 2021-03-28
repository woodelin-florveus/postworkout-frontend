import FavCards from "./FavCards"

function FavoritePost({favPost, deleteFav, updateFav}) {


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
            updateFav={updateFav}
            />
        )
   }) 



    return (
        <div>
        <h1>All favorites</h1>
        <div className="workout-container">
            {allFavs}
        </div>
        </div>
    )
}

export default FavoritePost; 