import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
const Login=()=>{
   const navigate= useNavigate();
    const [input,setinput]=useState({
        email : "",
        password: ""
    })
    const auth=[{email:"ankurverma6670@gmail.com",password: "Ankur@6770"},
        {email:"ankurverma7707@gmail.com",password: "Ankur@6670"},
        {email:"pankaj5656@gmail.com",password: "121212"}

    ];
     
    const handleLogin=(e)=>{
        e.preventDefault();
           console.log(input);
   
    const data = auth.find(item=>item.email === input.email && item.password === input.password)
    console.log(data)
     //     console.log("hello")
    //         const loggeduser=JSON.parse(localStorage.getItem("user"));
    //      console.log("loggeduser:",loggeduser);
    //      if(loggeduser===null){
    //         alert("Register first");
    //      }
    //    else if(input.email===loggeduser.email && input.password === loggeduser.password){
    //        navigate("/Notice");
    //      localStorage.setItem("loggedin",true)
    //    }
    if(data){
          console.log("user find")
          navigate("/Notice")
    }
       else{
        alert("Wrong credentials");
       }
    }
    return (
       <>
          <div className="background">
              
            </div>
            <form onSubmit={handleLogin}>
                <h3>Login Here</h3>

                <label htmlFor="username">Username</label>
                <input type="text"name="email" value={input.value} onChange={(e)=>setinput({
                  ...input,[e.target.name]: e.target.value
                })} placeholder="Email or Phone" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={input.value} onChange={(e)=>setinput({
                 ...input, [e.target.name]: e.target.value
                })} placeholder="Password" id="password" />

                <button type="submit">Log In</button>
                <div className="social">
                    <div className="go">
                        <FaGoogle /> Google
                    </div>
                    <div className="fb">
                        <FaFacebook /> Facebook
                    </div>
                </div>
                
            </form>
       </>
      
    )
}
export default Login;