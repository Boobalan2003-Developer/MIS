import axios from "axios"
import { useState } from "react"
import '../src/Loginpage.css'
import { Link, useNavigate } from "react-router-dom"
import logo from './Assets/usericon.png'

function Loginpage(){

  const [formlist,setformlist]=useState(true)
  const [passwordchange,setpasswordchange]=useState(false)
  const[FormData,setFormData]=useState({
    username:'',
    password:'',
    checkname:'',
    checkpass:''
  })

  const[messagecontent,setmessagecontent]=useState()

  const inputData=(event)=>{
    const {name,value}=event.target
    setFormData(prevData=>({
      ...prevData,[name]:value
    }))
  }
  const navigate=useNavigate()
  const SubmitHandle=(event)=>{
    event.preventDefault()
    axios.post('http://localhost:5001/LoginCheck',FormData)
    .then((res)=>{
      if(res.data.status===200){
        setmessagecontent('Login successfully')
        setTimeout(() => {
          navigate('/Dashboard')
        }, 3000);
      }
    })
    .catch((error)=>{
       setmessagecontent('Check Username and password',error.message)
    })
  }


  const passwordcheck=()=>{
    setformlist(false)
    setpasswordchange(true)

  }
  const changePassword=()=>{
    console.log('hi');
    
  }

    return(
  <div>
        <center className="mt-4">
        {
          messagecontent && <h3 className="-mt-5">{messagecontent}</h3>
        }
        <div className="bg-blue-200 rounded-2xl w-25 flex flex-column  py-1">
        <div className="mb-3">
          <img className="h-50 w-50 " src={logo} alt="userimage" />
          {formlist &&<h5>Sign In</h5>}
          {passwordchange &&<h5>Password change</h5>}
        </div>
         {formlist && <form onSubmit={SubmitHandle}>
            <input className=" py-2 w-75 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="text" name="username" value={FormData.username} onChange={inputData} placeholder="Enter the username" required /><br /><br />
            <input className=" py-2 w-75 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="password" name="password" value={FormData.password} onChange={inputData} placeholder="Enter the password" required /><br /><br />
            <button Link to='/Dashboard' className=" w-25 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300" >Login</button><br /><br />
         
          </form>}  {
            passwordchange && 
            <div className="bg-blue-200 rounded-2xl flex flex-column justify-center items-center  py-1">
              <input className=" py-2 w-75 px-3 border border-gray-300 rounded-md focus:ring-2 my-3 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="text" name="checkname" value={FormData.checkname} onChange={inputData} placeholder="Enter the emailid " /> 
              <input className=" py-2 w-75 px-3 border border-gray-300 rounded-md focus:ring-2 my-3  focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="password" name="checkpass" value={FormData.checkpass} onChange={inputData} placeholder="Enter the otp " />     
              <input className=" py-2 w-75 px-3 border border-gray-300 rounded-md focus:ring-2 my-3  focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="password" name="checkpass" value={FormData.checkpass} onChange={inputData} placeholder="Enter the password " /> 
              <button className=" w-25 bg-blue-500 hover:bg-blue-600 text-white font-semibold  py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300"  onClick={changePassword}>Commit</button> 
            </div>
          } 
          {formlist && <Link className="mb-2" onClick={passwordcheck} to=''><span>Forget password?</span></Link>}
          {passwordchange && <Link className="mb-2" to='/'><span>Login</span></Link>}
          <p>Don't have an account?</p>
          <Link className="mb-3" to='/Registrationpage'><span>Register</span></Link>
          
        </div>
        </center>
        <p className="text-center text-lg">About Blog Jobs Help API Privacy Terms Location Erode Contact Uploading & Non-Users Meta Verified </p><p className=" text-lg text-center">English @ 2025 SDLC.</p>
  </div>      
    )
}
export default Loginpage