import { useState } from "react";
import axios from 'axios'
import './Loginpage'
// import {Link} from 'react-router-dom'
import MenuToggle from "./MenuToggle";
function Dashboard(){
    // const[dataRetrive,setdataRetrive]=useState([])
    const[DataEnquiry,setDataEnquiry]=useState([])

    // const retriveprocess=()=>{
    //     axios.post('http://localhost:5001/RetriveData')
    //     .then((res)=>{
    //        setdataRetrive(res.data.result)
    //     })
    //     .catch((error)=>{
    //         console.log(error);
            
    //     })
    // }

    const enquiryprocess=()=>{
        axios.post('http://localhost:5001/enquiryretriveData').then((res)=>{
            setDataEnquiry(res.data.result)
            console.log(res.data.result);
            
        })
    }

    return(
        <div>
            <center>
                <MenuToggle />
                <h1 style={{position: 'absolute', top: '50%', left: '50%',color:'grey',transform: 'translate(-50%, -50%)'}}>-- DASHBOARD --</h1>
                {/* <button  style={{position: 'absolute', top: '50%', left: '50%',color:'grey',transform: 'translate(-50%, -50%)'}} className='bg-blue-500 text-white px-4 py-2 rounded' onClick={retriveprocess}>User Data</button> */}

                <button  style={{position: 'absolute', top: '25%', left: '47%',color:'grey',transform: 'translate(-50%, -50%)'}} className='bg-blue-500 text-white mx-4 px-4 py-2 rounded' onClick={enquiryprocess}>Enquiry Data</button>
                {/* <Link  style={{position: 'absolute', top: '25%', left: '50%',color:'grey',transform: 'translate(-50%, -50%)'}} className="bg-green-500 text-white px-4 mx-4 py-2 rounded" to='/'><button>Login</button></Link> */}
                {/* {
                    dataRetrive.length>0 && 
                    <>
                    <table className="mt-3">
                        <thead>
                            <tr>
                                {
                                    Object.keys(dataRetrive[0]).map((key)=>(
                                        <th key={key}>{key.toUpperCase()}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                                {dataRetrive.map((row,index)=>(
                                    <tr key={index}>
                                        {Object.values(row).map((values,i)=>(
                                            <td key={i}>{values}</td>
                                        ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    </>
                } */}
               {
    DataEnquiry.length > 0 && (
        <table style={{position: 'absolute', top: '30%',left:'0%'}}>
            <thead>
                <tr>
                    {Object.keys(DataEnquiry[0]).map((key) => (
                        <th key={key}>{key.toUpperCase()}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {DataEnquiry.map((row, index) => (
                    <tr key={index}>
                        {Object.values(row).map((value, i) => (
                            <td key={i}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

            </center>
        </div>
    )
}
export default Dashboard