import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Registrationpage(){
    const [FormData,setFormData]=useState({
        username:'',
        email:'',
        mobileno:'',
        password:'',
        otp:''
   })

   const[OtpInput,setOtpInput]=useState(false)
   const[formfield,setformfield]=useState(true)
   const[infomessage,setinfomessage]=useState()
   const Navigate = useNavigate()

    const InputData=(event)=>{
        const{name,value}=event.target
        setFormData(prevData=>({
            ...prevData,[name]:value
        }))
    }

    const SubmitHandle=(event)=>{
        event.preventDefault()
        setOtpInput(true)
        setformfield(false)
        axios.post('http://localhost:5001/RegisterCheck',FormData)
        .then((res)=>{
            setinfomessage(res.data.result)
        })
        .catch((error)=>{
            setinfomessage("error occurs in sending mail",error)
        })

    }
    const OTPHandling=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:5001/OTPCheck',FormData)
        .then((res)=>{
            if(res.data.status===200){
                setinfomessage('Email Verified Successfully')
                setTimeout(() => {
                    Navigate('/')
                }, 3000);
            }
        })
        .catch((error)=>{
            setinfomessage('Error occurs in ',error.message)
        })
    }

    return(
  <div className="w-full mt-5 h-100 flex justify-center ">
    <div className="bg-blue-200 rounded-2xl w-25 flex flex-column py-1">
    <center className="mt-4">
        {
            formfield &&
            <form onSubmit={SubmitHandle}>
                <h2 className="mb-4">Register Page</h2>
            <input  className=" py-2 w-75 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="text" name="username" value={FormData.username} onChange={InputData} placeholder="Enter Username" required /><br /><br />
            <input  className=" py-2 w-75 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="email" name="email" value={FormData.email} onChange={InputData} placeholder="Enter email" required /><br /><br />
            <input  className=" py-2 w-75 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="tel" name="mobileno" value={FormData.mobileno} onChange={InputData} placeholder="Enter Mobile no" required /><br /><br />
            <input  className=" py-2 w-75 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" type="password" name="password" value={FormData.password} onChange={InputData} placeholder="Enter password" required /><br /><br />
            <button  className=" w-25 bg-blue-500 mb-4 hover:bg-blue-600 text-white font-semibold px-2 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300" >Submit</button>
            
        </form>
        }
           {
            OtpInput &&
             <>
                <input type="text" name="otp" value={FormData.otp} onChange={InputData} placeholder="Enter OTP" /><br /><br />
                <button onClick={OTPHandling}>Verify</button><br /><br />
                {
                infomessage && <p>{infomessage}</p>
            }
             </>
           }
    </center>
  </div>
  </div>      
    )
}
export default Registrationpage