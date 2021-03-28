import { useState } from "react"
import { useHistory } from "react-router-dom"




function Login({setCurrentUser}){

const[formData, setFormData] = useState({name: "", password: ""})
const [errors, setErrors] = useState([])

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const history = useHistory();

    function handleSubmit(event){
        event.preventDefault();

        fetch("http://localhost:3000/login", {
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
            console.log(data.user)
            localStorage.setItem("token", data.token)
            
            history.push("/home")
        })
        .catch((data) => {
            setErrors(data.errors)
        })
    }

    return(
        <div>
     <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Username</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={formData.name}
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

export default Login;