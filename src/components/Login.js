import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
            alt="background-image"
            />
        </div>
        <div className="w-4/12 absolute py-4 bg-black my-40 mx-auto right-0 left-0 text-white px-20 rounded-lg opacity-80">
            <form className="my-6">
            <h1 className="font-bold text-3xl py-4 m-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                { !isSignIn && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600"/>}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600"/>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600"/>
                <button className="py-4 my-6 bg-red-700 w-full">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-6 cursor-pointer hover:text-red-500" onClick={toggleForm}>{isSignIn ? "New to Netflix ? Sign Up Now" : "Already registered ? Sign In Now."}</p>
            </form>
        </div>
    </div>
  )
}

export default Login
