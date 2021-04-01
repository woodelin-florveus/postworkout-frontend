import { useState } from "react"
import { useHistory } from "react-router-dom"

function Signup({ setCurrentUser }){

    const[formData, setFormData] = useState({name:"", email: "", password: ""})
    const [errors, setErrors] = useState([])
    const history = useHistory()
    console.log(errors)

    function handleSubmit(event){
        event.preventDefault();

        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
        .then((response) => {
          if(response.ok) {
              return response.json()
          } else {
              return response.json().then((data) => {
                  throw data
              })
          }
      })
      .then((data) =>{
          setCurrentUser(data.user);
          localStorage.setItem("token", data.token)
          
          history.push("/home")
      })
      .catch((data) => {
          setErrors(data.errors)
      })

    }

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }



    return (
            <div>
     <form className="profile-form" onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <label>Username</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          autoComplete="off"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <input type="submit" value="Login" />
        {errors.map(error => <p key={error}>{error}</p>)}
      </form>
        </div>

    
    )
}

export default Signup;