

function Search({search, setSearch}){

    function handleSearch(event){
        setSearch(event.target.value)
    }

    return(
        <div className="searchbar">
            <h1 className="all_post">Latest Posts</h1>
            <label htmlFor="Search">Search Blogs</label>
            <input 
            className="search"
            type="search"
            autoComplete="off"
            value={search}
            onChange={handleSearch}
            placeholder="Search all blogs"
            />
        </div>
    )
}

export default Search;

