import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
const handleData=(e)=>{
e.preventDefault();
    const storedData = localStorage.getItem("user");
    const userData=JSON.parse(storedData);
    console.log(userData)
    const isMatch = userData.some((data) => data.username === email && data.password === password);
    if(isMatch){
    setMessage("Successfully Login!");
     setTimeout(() => {
        navigate("/mart");
     }, 1000);
    }
    else if(!isMatch){
   setMessage("Error:Please Enter Valid inputs")
    }
    else{
        navigate("/signup")
    }
}

return(
    <div>
    <form className="form" onSubmit={handleData}>
      <h1>Login</h1>
      <input className="items" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="items" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" value={password} />
      <p className={message.includes("Error") ? "red" : "green"}>{message}</p>
      <div className="form-buttons">
          <button className="btn submit-btn decoration" type="submit">Login</button>
          <Link className="btn submit-btn decoration" to="/signup">Back</Link>
        </div>
    </form>
    </div>
)
}

export default Login;