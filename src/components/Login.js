import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn , setIsSignIn]=useState("Sign In")
  const toggleSignInForm=()=>{
      setIsSignIn(!isSignIn)
  }
  return (
    <div >
      <Header/>
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
      </div>
      <form className=" w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0  text-white shadow-md-dark bg-opacity-80">
      <img className=" w-13 h-10 " src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" alt="logo" />
        <h1 className='font-bold text-3xl p-2 my-4'> {isSignIn?"Sign In":"Sign Up"}</h1>
        {!isSignIn && <input type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-700"/>}
        <input type="text" placeholder="Enter your email" className="p-2 my-4 w-full bg-gray-700"/>
        <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700 "/>
        <button className="p-2 my-4 bg-red-700 w-full r">{isSignIn?"Sign In":"Sign Up"}</button>
       <p className="p-2 my-4 cursor-pointer"  onClick={toggleSignInForm}>{isSignIn?"New User : Sign Up":"Already a User : Sign In Now"}</p>
      </form>
    
    </div>
  )
}

export default Login