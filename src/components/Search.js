

function Search({search, setSearch}){

    function handleSearch(event){
        setSearch(event.target.value)
    }

    return(
        <div className="searchbar">
            <label htmlFor="Search">Search Blogs</label>
            <input 
            type="text"
            id="search"
            autoComplete="off"
            value={search}
            onChange={handleSearch}
            placeholder="Search all blogs"
            />
        </div>
    )
}

export default Search;

