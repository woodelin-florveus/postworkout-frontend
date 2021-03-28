import { useState } from "react"

function Profile( { currentUser, setCurrentUser }){

    const [formData, setFormData] = useState({name: currentUser.name, email: currentUser.email})

    function handleChange(event){
        setFormData({...formData, 
            [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault();
        const token = localStorage.getItem("token")
        if(token){
            fetch("http://localhost:3000/myself", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(setCurrentUser)
    }
}


    return (
        <div>
<form onSubmit={handleSubmit}>
  <h3>Name</h3>
  <input type="text" id="fname" name="name" value={formData.name} onChange={handleChange}/>
  <h3>Email</h3>
  <input type="text" id="lname" name="email" value={formData.email} onChange={handleChange}/>
  <input type="submit" value="Submit"></input>
</form>
        </div>
    )
}

export default Profile;