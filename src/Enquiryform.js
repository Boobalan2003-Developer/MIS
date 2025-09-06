import { useEffect, useState } from "react";
import "./Enquiryform.css";
import MenuToggle from "./MenuToggle";
import axios from 'axios'

function Enquiryform() {

  const[enquiryidno,setenquiryidno]=useState()
    
  useEffect(() => {
    axios.post("http://localhost:5001/enquiryidgenerator")
  .then((res)=>{
    setenquiryidno(res.data.enqid)
  })
  },[]);

  const[enqData,setenqData]=useState({
    enqid:'',
    enqdate:'',
    enqname:'',
    enqemail:'',
    enqmobileno:'',
    enqaddress:'',
    enqcity:'',
    enqspouse:'',
    enqdob:'',
    enqgender:'',
    enqoccu:'',
    enqclgname:'',
    enqedu:'',
    enqdegree:'',
    enqcourse:'',
    enqpassedout:'',
    enqintcourse:'',
    enqplacedata:'',
    enqreference:'',
    enqexpdate:'',
    enqnextfollow:'',
    enqregstatus:'',
    enqfilestatus:''
  })

  const FormData=(event)=>{
    const{name,value}=event.target
    setenqData(prevData=>({
      ...prevData,[name]:value
    }))
  }

  const SubmitHandle=(event)=>{
    event.preventDefault()
    axios.post('http://localhost:5001/EnquiryData',enqData)
    .then((res)=>{
      if(res.send.status===200){
        alert('Your Data will Stored, Id will sent to your Email')
      }
    })
    .catch((error)=>{
      console.log(error.message);
    })
     setenqData({
    enqid:'',
    enqdate:'',
    enqname:'',
    enqemail:'',
    enqmobileno:'',
    enqaddress:'',
    enqcity:'',
    enqspouse:'',
    enqdob:'',
    enqgender:'',
    enqoccu:'',
    enqpassedout:'',
    enqintcourse:'',
    enqplacedata:'',
    enqreference:'',
    enqexpdate:'',
    enqnextfollow:'',
    enqregstatus:'',
    enqfilestatus:''
   })
  }

  const clearHandle=()=>{
  window.location.reload(); 
  }
 

  return (
    <div>
      <MenuToggle />
      <form  onSubmit={SubmitHandle}  className="body_content  d-flex align-items-center position-relative ">
        <div className="right_content container-fluid py-5 ">
          <div className="row ">
            <div className="col-12 ">
              <div className="enq_form d-flex flex-column align-items-center w-100  mx-auto">
                <h2 className="mb-3">ENQUIRY FORM</h2>

                {/* // <!-- enquiry details --> */}

                <h4 className="enq_detail_h4 text-white w-75 bg-primary py-2 ">
                  Enquiry Details
                </h4>
                <div className="border enq_detail_div border-primary w-75 d-flex flex-column align-items-center mb-3 py-3 ">
                  <div className="form1 w-75">
                    <label  className="form-label">
                      Enquiry Id
                    </label>
                    <input
                      name="enqid"
                      value={enqData.enqid}
                      onChange={FormData}
                      placeholder={enquiryidno}
                      disabled
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form1 w-75">
                    <label   className="form-label">
                      Date of Enquiry <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      name="enqdate"
                      value={enqData.enqdate}
                      onChange={FormData}
                      className="  mb-3 form-control"
                    />
                  </div>
                </div>

                {/* <!-- personal details --> */}

                <h4
                  className ="personal_detail_h4 text-white w-75 bg-primary py-2 "
                >
                  Personal&nbsp;Details
                </h4>
                <div className=" personal_detail_div border border-primary w-75  d-flex flex-column align-items-center mb-3 py-3  ">
                  <div className="form1 w-75">
                    <label forhtml="name">
                      Name <span className="text-danger">*</span>{" "}
                    </label>
                    <input 
                      name="enqname"
                      value={enqData.enqname}
                      onChange={FormData}
                      type="text"
                      placeholder="Enter your name"
                      className="form-control"
                    />
                  </div>

                  <div className="form1 w-75">
                    <label className="form-label"  >
                      Email Id <span className="text-danger">*</span>
                    </label>
                    <input
                      name="enqemail"
                      value={enqData.enqemail}
                      onChange={FormData}
                      className="form-control"
                      placeholder="Example@gmail.com"
                      type="email"
                    />
                  </div>

                  <div className="form1 w-75">
                    <label className="form-label"  >
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <input
                      name="enqmobileno"
                      value={enqData.enqmobileno}
                      onChange={FormData}
                      className="form-control"
                      placeholder=" 9000000000"
                      type="text"
                    />
                  </div>

                  <div className="form1 w-75">
                    <label className="form-label">Address</label>
                    <textarea 
                      name="enqaddress"
                      value={enqData.enqaddress}
                      onChange={FormData}
                      className="address_area form-control text"
                      type="text"
                    ></textarea>
                  </div>

                  <div className="form1 w-75">
                    <label   className="form-label">
                      City
                    </label>
                    <input type="text"
                      name="enqcity"
                      value={enqData.enqcity}
                      onChange={FormData}
                     className="form-control" />
                  </div>

                  <div className="form1 w-75">
                    <label className="form-label"  >
                      Parent&nbsp;or&nbsp;Spouse&nbsp;Name
                    </label>
                    <input
                      name="enqspouse"
                      value={enqData.enqspouse}
                      onChange={FormData} className="form-control" type="text" />
                  </div>

                  <div className="form1 w-75">
                    <label className="form-label"  >
                      Date of Birth <span className="text-danger">*</span>
                    </label>
                    <input
                      name="enqdob"
                      value={enqData.enqdob}
                      onChange={FormData} className="form-control" type="date" />
                  </div>

                  <div className="form1 w-75">
                    <label className="form-label"  >
                      Gender <span className="text-danger">*</span>
                    </label>
                    <select className="form-control "
                      value={enqData.enqgender}
                      onChange={FormData} name="enqgender">
                      <option value="">--Select Gender--</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Others</option>
                    </select>
                  </div>

                  <div className="form1 w-75">
                    <label className="form-label"  >
                      Occupation
                    </label>
                    <input 
                      name="enqoccu"
                      value={enqData.enqoccu}
                      onChange={FormData}
                      className="form-control"
                      placeholder="Ex: Driver"
                      type="text"
                    />
                  </div>
                </div>

                {/* <!-- Educational details --> */}

                <h4
                  className="education_detail_h4 text-white w-75 bg-primary py-2 "
                >
                  Educational Details
                </h4>
                <div
                  className ="education_detail_div border border-primary w-75  d-flex flex-column align-items-center  mb-3 py-3  "
                >
                  <div className="form1 w-75">
                    <label   className="form-label">
                      College Name <span className="text-danger">*</span>
                    </label>
                    <input
                      name="enqclgname"
                      value={enqData.enqclgname}
                      onChange={FormData}
                      type="text"
                      placeholder="Ex: Nandha Arts and Science College"
                      className="form-control"
                    />
                  </div>

                  <div className="form1 w-75">
                    <label forhtml="education" className="form-label">
                      Educational&nbsp;Qualification&nbsp;
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      id="education"
                      name="enqedu"
                      value={enqData.enqedu}
                      onChange={FormData}
                      className="form-control"
                    >
                      <option value="">--Select--</option>
                      <option value="high_school">
                        High School / Secondary School
                      </option>
                      <option value="intermediate">
                        Higher Secondary / Intermediate
                      </option>
                      <option value="diploma">Diploma</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">Doctorate / Ph.D</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form1 w-75">
                    <label className="form-label"  >
                      Degree <span className="text-danger">*</span>
                    </label>
                    <select 
                      name="enqdegree"
                      value={enqData.enqdegree}
                      onChange={FormData} className="form-control">
                      <option value="">--Select Degree--</option>
                      {/* <!-- Undergraduate Degrees --> */}
                      <option value="ba">Bachelor of Arts (BA)</option>
                      <option value="bsc">Bachelor of Science (BSc)</option>
                      <option value="bcom">Bachelor of Commerce (BCom)</option>
                      <option value="bba">
                        Bachelor of Business Administration (BBA)
                      </option>
                      <option value="be">Bachelor of Engineering (BE)</option>
                      <option value="btech">
                        Bachelor of Technology (BTech)
                      </option>
                      <option value="llb">Bachelor of Laws (LLB)</option>
                      <option value="mbbs">
                        Bachelor of Medicine and Bachelor of Surgery (MBBS)
                      </option>

                      {/* <!-- Postgraduate Degrees --> */}
                      <option value="ma">Master of Arts (MA)</option>
                      <option value="msc">Master of Science (MSc)</option>
                      <option value="mcom">Master of Commerce (MCom)</option>
                      <option value="mba">
                        Master of Business Administration (MBA)
                      </option>
                      <option value="me">Master of Engineering (ME)</option>
                      <option value="mtech">
                        Master of Technology (MTech)
                      </option>
                      <option value="llm">Master of Laws (LLM)</option>
                      <option value="md">Doctor of Medicine (MD)</option>

                      {/* <!-- Doctoral Degrees --> */}
                      <option value="phd">Doctor of Philosophy (PhD)</option>
                      <option value="dsc">Doctor of Science (DSc)</option>

                      {/* <!-- Professional & Other Degrees --> */}
                      <option value="ca">Chartered Accountant (CA)</option>
                      <option value="cs">Company Secretary (CS)</option>
                      <option value="icwa">
                        Cost and Works Accountant (ICWA)
                      </option>
                      <option value="diploma">Diploma</option>
                      <option value="certificate">Certificate Course</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form1 w-75">
                    <label   className="form-label">
                      Course <span className="text-danger">*</span>
                    </label>
                    <select id="course" 
                      name="enqcourse"
                      value={enqData.enqcourse}
                      onChange={FormData} className="form-control">
                      <option value="">--Select Course--</option>
                      {/* <!-- Engineering --> */}
                      <option value="be_cse">
                        B.E. Computer Science Engineering
                      </option>
                      <option value="be_it">B.E. Information Technology</option>
                      <option value="be_mechanical">
                        B.E. Mechanical Engineering
                      </option>
                      <option value="be_civil">B.E. Civil Engineering</option>
                      <option value="be_ece">
                        B.E. Electronics & Communication Engineering
                      </option>
                      <option value="be_eee">
                        B.E. Electrical & Electronics Engineering
                      </option>
                      <option value="be_automobile">
                        B.E. Automobile Engineering
                      </option>
                      <option value="be_aerospace">
                        B.E. Aerospace Engineering
                      </option>
                      <option value="be_chemical">
                        B.E. Chemical Engineering
                      </option>
                      <option value="be_biomedical">
                        B.E. Biomedical Engineering
                      </option>

                      {/* <!-- Technology --> */}
                      <option value="btech_ai">
                        B.Tech. Artificial Intelligence
                      </option>
                      <option value="btech_ds">B.Tech. Data Science</option>
                      <option value="btech_cyber">B.Tech. Cybersecurity</option>

                      {/* <!-- Medical / Health --> */}
                      <option value="mbbs">MBBS (Medicine & Surgery)</option>
                      <option value="bds">BDS (Dental Surgery)</option>
                      <option value="bams">BAMS (Ayurvedic Medicine)</option>
                      <option value="bhms">BHMS (Homeopathic Medicine)</option>
                      <option value="bpt">BPT (Physiotherapy)</option>
                      <option value="bsc_nursing">B.Sc. Nursing</option>
                      <option value="bpharm">B.Pharm. (Pharmacy)</option>

                      {/* <!-- Science --> */}
                      <option value="bsc_cs">B.Sc. Computer Science</option>
                      <option value="bsc_it">
                        B.Sc. Information Technology
                      </option>
                      <option value="bsc_physics">B.Sc. Physics</option>
                      <option value="bsc_chemistry">B.Sc. Chemistry</option>
                      <option value="bsc_biology">B.Sc. Biology</option>
                      <option value="bsc_math">B.Sc. Mathematics</option>
                      <option value="bsc_microbiology">
                        B.Sc. Microbiology
                      </option>
                      <option value="bsc_biotech">B.Sc. Biotechnology</option>

                      {/* <!-- Arts --> */}
                      <option value="ba_english">B.A. English</option>
                      <option value="ba_history">B.A. History</option>
                      <option value="ba_psychology">B.A. Psychology</option>
                      <option value="ba_political">
                        B.A. Political Science
                      </option>
                      <option value="ba_economics">B.A. Economics</option>
                      <option value="ba_sociology">B.A. Sociology</option>

                      {/* <!-- Commerce & Business --> */}
                      <option value="bcom_general">B.Com. General</option>
                      <option value="bcom_acc">
                        B.Com. Accounting & Finance
                      </option>
                      <option value="bcom_banking">
                        B.Com. Banking & Insurance
                      </option>
                      <option value="bba">BBA (Business Administration)</option>
                      <option value="bms">BMS (Management Studies)</option>

                      {/* <!-- Computer Applications --> */}
                      <option value="bca">BCA (Computer Applications)</option>
                      <option value="mca">
                        MCA (Computer Applications - PG)
                      </option>

                      {/* <!-- Management (PG) --> */}
                      <option value="mba">
                        MBA (Master of Business Administration)
                      </option>
                      <option value="mba_hr">MBA in Human Resources</option>
                      <option value="mba_finance">MBA in Finance</option>
                      <option value="mba_marketing">MBA in Marketing</option>
                      <option value="mba_analytics">
                        MBA in Business Analytics
                      </option>

                      {/* <!-- Law --> */}
                      <option value="llb">LL.B. (Bachelor of Law)</option>
                      <option value="ba_llb">B.A. LL.B.</option>
                      <option value="bba_llb">B.B.A. LL.B.</option>
                      <option value="llm">LL.M. (Master of Law)</option>

                      {/* <!-- Education --> */}
                      <option value="bed">B.Ed. (Bachelor of Education)</option>
                      <option value="med">M.Ed. (Master of Education)</option>

                      {/* <!-- Design & Media --> */}
                      <option value="bdes">B.Des. (Bachelor of Design)</option>
                      <option value="bfa">BFA (Fine Arts)</option>
                      <option value="bjmc">
                        BJMC (Journalism & Mass Comm.)
                      </option>

                      {/* <!-- Other Professional / Certificate --> */}
                      <option value="cert_digital_marketing">
                        Certificate in Digital Marketing
                      </option>
                      <option value="cert_data_science">
                        Certificate in Data Science
                      </option>
                      <option value="cert_uiux">
                        Certificate in UI/UX Design
                      </option>
                      <option value="cert_web_dev">
                        Certificate in Web Development
                      </option>

                      {/* <!-- Others --> */}
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div className="form1 w-75">
                    <label className="form-label" forhtml=" date">
                      Year of Passed Out <span className="text-danger">*</span>
                    </label>
                    <input 
                      name="enqpassedout"
                      value={enqData.enqpassedout}
                      onChange={FormData} className="form-control" type="date" />
                  </div>
                </div>

                {/* <!-- others --> */}

                <h4
                  className="other_detail_h4 text-white w-75 bg-primary py-2 "
                >
                  Other&nbsp;Details
                </h4>
                <div className=" other_detail_div border border-primary w-75  d-flex flex-column align-items-center  mb-3 py-3  ">
                  <div className="form1 form-course w-75 ">
                    <label className="form-label" forhtml="course">
                      Course&nbsp;of&nbsp;Interested{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <select 
                      name="enqintcourse"
                      value={enqData.enqintcourse}
                      onChange={FormData} className="form-control">
                      <option value="">--Select Course of Interested--</option>
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="AWS">AWS</option>
                      <option value="MERN">MERN</option>
                      <option value="MEAN">MEAN</option>
                      <option value="Blockchain">Blockchain</option>
                      <option value="IOT">IOT</option>
                      <option value="C">C</option>
                      <option value="C++">C++</option>
                      <option value="JAVA">JAVA</option>
                      <option value="PYTHON">PYTHON</option>
                      <option value="UI/UX DESIGN">UI/UX DESIGN</option>
                      <option value="EXCEL">EXCEL</option>
                      <option value="Java Full Stack">Java Full Stack</option>
                      <option value="Mobile Full Stack">
                        Mobile Full Stack
                      </option>
                    </select>
                  </div>

                  <div className="form1 w-75">
                    <label   className="">
                      Placement&nbsp;Details{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="enqplacedata"
                      value={enqData.enqplacedata}
                      onChange={FormData}
                      className="form-select"
                    >
                      <option value="">--Placement Details--</option>
                      <option value="Placement with course">
                        Placement With Course
                      </option>
                      <option value="Placement without course">
                        Placement Without Course
                      </option>
                    </select>
                  </div>
                  <div className="form1 w-75">
                    <label   className="form-label">
                      Source&nbsp;of&nbsp;Reference
                    </label>
                    <select
                      id="reference"
                      name="enqreference"
                      value={enqData.enqreference}
                      onChange={FormData}
                      className="form-select"
                    >
                      <option value="">--Select Source--</option>
                      <option value="friend">Friend / Family</option>
                      <option value="social_media">
                        Social Media (Facebook, Instagram, etc.)
                      </option>
                      <option value="google">Google / Search Engine</option>
                      <option value="website">Official Website</option>
                      <option value="email">Email / Newsletter</option>
                      <option value="advertisement">
                        Advertisement (TV, Radio, Newspaper)
                      </option>
                      <option value="event">Seminar / Event / Workshop</option>
                      <option value="school">School / College</option>
                      <option value="referral">
                        Referral by Alumni / Employee
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form1 w-75">
                    <label   className="form-label">
                      Expected&nbsp;Date&nbsp;of&nbsp;Join
                    </label>
                    <input type="date"
                      name="enqexpdate"
                      value={enqData.enqexpdate}
                      onChange={FormData} className="form-control" />
                  </div>
                  <div className="form1 w-75">
                    <label   className="form-label">
                      Next&nbsp;follow&nbsp;up
                    </label>
                    <input type="date"
                      name="enqnextfollow"
                      value={enqData.enqnextfollow}
                      onChange={FormData} className="form-control" />
                  </div>

                  <div className="form1 w-75">
                    <label   className="form-label">
                      Registration&nbsp;Status{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      id="registration_status"
                      name="enqregstatus"
                      value={enqData.enqregstatus}
                      onChange={FormData}
                      className="form-control"
                    >
                      <option value="">--Select Registration Status--</option>
                      <option value="Closed">Closed</option>
                      <option value="Registered">Registered</option>
                      <option value="Non-Registered">Non-Registered</option>
                    </select>
                  </div>

                  <div className="form1 w-75">
                    <label   className="form-label">
                      Status&nbsp;of&nbsp;File{" "}
                      <span className="text-danger">*</span>
                    </label>
                    {/* <!-- <input type="text" name="" id="" className="form-control"> --> */}
                    <select
                      id="file_status"
                      name="enqfilestatus"
                      value={enqData.enqfilestatus}
                      onChange={FormData}
                      className="form-control"
                    >
                      <option value="">--Select Status--</option>
                      <option value="Pending">Pending</option>
                      <option value="completed">Completed</option>
                      <option value="Under Review">Under Review</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center gap-5">
              <button onClick={clearHandle} className=" clearButton rounded-2 my-5 ">
                  Clear
              </button>
              <button className="submitButton rounded-2 my-5 " type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Enquiryform;
