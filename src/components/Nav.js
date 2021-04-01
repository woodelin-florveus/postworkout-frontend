import { NavLink } from "react-router-dom";
import {Carousel} from "react-bootstrap"


function Nav({currentUser, setCurrentUser}){


    function handleLogout(){
        setCurrentUser(null)
        localStorage.removeItem("token")
    }



    return (
        <div>
   <h1 className="header-logo">Post Workout</h1>

<Carousel>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/image_1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="carousel-header">4 Exercises to Strengthen Your Weak Glutes</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/image_7.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="carousel-header">3 Core Moves to Improve Your Running Form</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/image_8.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="carousel-header">Staying Fit During Times of Uncertainty</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

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

                <NavLink exact to="/about">
                    About
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

