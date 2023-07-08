import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inputData, setInputData] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(inputData));
  }, [inputData]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password === "" || confirmPassword === "" || fullname === "" || email === "") {
      setMessage("Error: All fields are mandatory");
    } else if (password === confirmPassword) {
      setMessage("Successfully Sign up!");
      let arrData = {
        username: email,
        password: password
      };
      setInputData([...inputData, arrData]);
      setFullname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setMessage("Error: Password Mismatch");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <h1>Signup</h1>
        <input className="items" type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        <input className="items" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="items" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" value={password} />
        <input className="items" onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" value={confirmPassword} />
        <p className={message.includes("Error") ? "red" : "Green"}>{message}</p>
        <div className="form-buttons">
          <button className="btn submit-btn decoration" type="submit">Signup</button>
          <Link className="btn submit-btn decoration" to="/">Back</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
