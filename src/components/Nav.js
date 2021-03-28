import { NavLink } from "react-router-dom";



function Nav({currentUser, setCurrentUser}){


    function handleLogout(){
        setCurrentUser(null)
        localStorage.removeItem("token")
    }



    return (
        <div>
        <a href="https://placeholder.com"> 
            <img src="images/image_1.jpg" alt="header" />
        </a>

            <nav>
       
                <NavLink exact to="/home">
                    Home
                </NavLink>

                {currentUser ? (
                    <>
                    <NavLink exact to="/collection">
                    All Blogs
                </NavLink>

                <NavLink exact to="/favorites">
                    Favorites
                </NavLink>

                <NavLink exact to="/comments">
                    Comments
                </NavLink>

                <NavLink exact to="/profile">
                    Profile
                </NavLink>

                <NavLink exact to="/profile" onClick={handleLogout}>
                    Logout
                </NavLink>
                </>
                ) : (
                    <>
                    <NavLink exact to="/signup">
                    Signup
                </NavLink>

                <NavLink exact to="/login">
                    Login
                </NavLink>
                </>
                )}

            </nav>
            
        </div>
    )
}


export default Nav;

