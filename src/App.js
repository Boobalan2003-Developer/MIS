import { useState } from "react";

function App() {

  const[forminput,setforminput]=useState({
    enqdate:'',
    enqid:'',
    enqname:'',
    enqemail:'',
    enqmoileno:'',
    enqadd:'',
    enqgender:'',
    enqparentname:'',
    enqparentmobile:'',
    enqparentocc:'',
    enqedu:'',
    enqdeg:'',
    enqcourse:'',
    enqyop:'',
    enqclgname:'',
    enqcando:'',
    enqcoi:'',
    enqsor:'',
    enqfee:'',
    enqoff:'',
    enqnfup:'',
    enqcouname:'',
    enqdemofname:'',
    enqdemodate:'',
    enqdemode:'',
    enqcreateon:'',
    enqcreateby:''
  })

  const FormData=(event)=>{
    const{name,value}=event.target
    setforminput(prevdata=>({
      ...prevdata,[name]:value
    }))
  }

  const submitHandle=(event)=>{
    event.preventDefault()
    console.log(forminput.enqcourse);
    
  }

  return (
    <div>
        <form onSubmit={submitHandle} method="POST"> 
          <h1 className="mb-5 text-center text-3xl">ENQUIRY FORM</h1>

      {/* enquiry details */}
     
       <h4 className="text-2xl sectionHead">Enquiry&nbsp;Detail</h4>
     <section className="flex flex-col  sm:w-[100%] sm:flex-col items-center md:w-[100%] md:flex-row  justify-evenly">

        <div className="flex w-[100%] md:w-[50%] sm:w-[50%] flex-col justify-evenly items-center">
          <div className="flex w-[75%] md:w-[75%] sm:w-[75%] flex-col">
            <label className="labelfield">Enquiry&nbsp;date</label>
            <input name="enqdate" value={forminput.enqdate} onChange={FormData} className="bg-white/80  inputfield "  type="date"/>
          </div>
        </div>

        <div className=" w-[100%] md:w-[50%]  sm:w-[50%] flex flex-col justify-evenly items-center">
          <div className="flex w-[75%] md:w-[75%] sm:w-[75%] flex-col">
            <label className="labelfield">Enquiry&nbsp;Id</label>
            <input name="enqid" value={forminput.enqid} onChange={FormData} className="bg-white/80  inputfield" disabled type="text"/>
          </div>  
        </div>
      </section>

      {/* personal Details */}
      
        <h4 className="text-2xl mt-5  sectionHead">Personal Detail</h4>
      <section className="flex flex-col  sm:w-[100%] sm:flex-col items-center md:w-[100%] md:flex-row  justify-evenly">

        <div className="flex w-[100%] md:w-[50%] sm:w-[50%] flex-col justify-evenly items-center">

          <div className="flex w-[75%] md:w-[75%] sm:w-[75%] flex-col">
            <label className="labelfield">Name</label>
            <input name="enqname" value={forminput.name} onChange={FormData} className="bg-white/80  inputfield   "type="text"placeholder="Full Name"/>
          </div>
          <div className="flex  w-[75%] md:w-[75%] sm:w-[75%] flex-col">
            <label className="labelfield">email</label>
            <input name="enqemail" value={forminput.enqemail} onChange={FormData} className="bg-white/80 inputfield  "type="text" placeholder="Email@gmail.com"/>
          </div>
          <div className="flex w-[75%] md:w-[75%] sm:w-[75%] flex-col">
            <label className="labelfield">mobileno</label>
            <input name="enqmoileno" value={forminput.enqmobileno} onChange={FormData} className="bg-white/80 inputfield  " type="text" placeholder="Mobile No" />
          </div>
          <div className="flex md:w-[75%] sm:w-[75%] w-[75%] flex-col">
            <label className="labelfield">address</label>
            <textarea name="enqadd" value={forminput.enqadd} onChange={FormData}
              className="bg-white/80 inputfield  "
              type="text"
              placeholder="Address"
            />
          </div>
        </div>
        <div className=" w-[100%] md:w-[50%]  sm:w-[50%] flex flex-col justify-evenly items-center">
          <div className="flex flex-col w-[75%] md:w-[75%] sm:w-[75%]">
            <label className="labelfield">Gender</label>
            <select name="enqgender" value={forminput.enqgender} onChange={FormData} className="bg-white/80 inputfield">
              <option defaultValue='-'>--Select Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="flex flex-col w-[75%] md:w-[75%] sm:w-[75%]">
            <label className="labelfield">Parent&nbsp;name</label>
            <input name="enqparentname" value={forminput.enqparentname} onChange={FormData}
              type="text"
              className="bg-white/80 inputfield  "
              placeholder="Full Name"
            />
          </div>
          <div className="flex flex-col w-[75%] md:w-[75%] sm:w-[75%]">
            <label className="labelfield">Parent&nbsp;MobileNo</label>
            <input name="enqparentmobile" value={forminput.enqparentmobile} onChange={FormData}
              type="text"
              className="bg-white/80 inputfield  "
              placeholder="Mobile No"
            />
          </div>
          <div className="flex flex-col w-[75%] md:w-[75%] sm:w-[75%]">
            <label className="labelfield">Parent&nbsp;Occupation</label>
            <input name="enqparentocc" value={forminput.enqparentocc} onChange={FormData}
              type="text"
              className="bg-white/80 inputfield  "
              placeholder="Occupation"
            />
          </div>
        </div>
      </section>

      {/* educational Details */}

        <h4 className="text-2xl mt-5  sectionHead">Educational Details</h4>
      <section className="flex flex-col  sm:w-[100%] sm:flex-col items-center md:w-[100%] md:flex-row  justify-evenly">

        <div className="flex w-[100%] md:w-[50%] sm:w-[50%] flex-col justify-evenly items-center">

          <div className="flex  w-[75%] md:w-[75%] sm:w-[75%] flex-col">
            <label className="labelfield" >Educational&nbsp;Qualification&nbsp;</label>
              <select name="enqedu" value={forminput.enqedu} onChange={FormData} className="inputfield bg-white/80" >
                <option value="">--Select--</option>
                <option value="high_school">High School / Secondary School</option>
                <option value="intermediate"> Higher Secondary / Intermediate</option>
                <option value="diploma">Diploma</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">Doctorate / Ph.D</option>
                <option value="other">Other</option>
              </select>
          </div>
          <div className="flex w-[75%] md:w-[75%] sm:w-[75%] flex-col">
           <label className="labelfield"  >Degree</label>
                    <select name="enqdeg" value={forminput.enqdeg} onChange={FormData}
                     className="inputfield bg-white/80">
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
          <div className="flex md:w-[75%] sm:w-[75%] w-[75%] flex-col">
           <label   className="labelfield">Course</label>
                    <select name="enqcourse" value={forminput.enqcourse} onChange={FormData}
                     className="inputfield bg-white/80">
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
        </div>
        <div className=" w-[100%] md:w-[50%]  sm:w-[50%] flex flex-col justify-evenly items-center">
          <div className="flex flex-col w-[75%] md:w-[75%] sm:w-[75%]">
            <label className="labelfield">Year&nbsp;of&nbsp;passing</label>
            <input type="date" name="enqyop" value={forminput.enqyop} onChange={FormData} className="inputfield bg-white/80" />
          </div>
          <div className="flex flex-col w-[75%] md:w-[75%] sm:w-[75%]">
            <label className="labelfield">College&nbsp;name</label>
            <input name="enqclgname" value={forminput.enqclgname} onChange={FormData}
              type="text"
              className="bg-white/80 inputfield  "
              placeholder="University / Autonomous"
            />
          </div>
          
          <div className="flex flex-col w-[75%] md:w-[75%] sm:w-[75%]">
            <label className="labelfield">Canditate&nbsp;Occupation</label>
            <input name="enqcando" value={forminput.enqcando} onChange={FormData}
              type="text"
              className="bg-white/80 inputfield  "
              placeholder="Occupation"
            />
          </div>
        </div>
      </section> 
      {/* others details      */}

        <h4 className="text-2xl mt-5  sectionHead">Other&nbsp;Details</h4>
      <section className="flex flex-col  sm:w-[100%] sm:flex-col items-center md:w-[100%] md:flex-row  justify-evenly">

        <div className="flex w-[100%] md:w-[50%] sm:w-[50%] flex-col justify-evenly items-center">

          <div className="flex w-[75%] md:w-[75%] sm:w-[75%] flex-col">
            <label className="labelfield">Course&nbsp;of&nbsp;Interest</label>
            <input name="enqcoi" value={forminput.enqcoi} onChange={FormData} className="bg-white/80  inputfield   "type="text"placeholder="MERN,JAVA,PYTHON..."/>
          </div>
          <div className="flex  w-[75%] md:w-[75%] sm:w-[75%] flex-col">
            <label className="labelfield">Source&nbsp;of&nbsp;Reference</label>
            <select name="enqsor" value={forminput.enqsor} onChange={FormData} className=" bg-white/80 inputfield">
              <option >-- Select the Reference --</option>
              <option >Friends</option>
              <option >Social&nbsp;Media</option>
              <option >Sign&nbsp;Board</option>
              <option >Just&nbsp;Dial</option>
              <option >Alumini</option>
            </select>
          </div>
          <div className="flex w-[75%] md:w-[75%] sm:w-[75%] flex-col">
            <label className="labelfield">Commited&nbsp;Fee</label>
            <input name="enqfee" value={forminput.enqfee} onChange={FormData} className="bg-white/80 inputfield  " type="text" placeholder="Commited fees in Ruppess" />
          </div>
          <div className="flex w-[75%] md:w-[75%] sm:w-[75%] flex-col">
            <label className="labelfield">Offers</label>
            <input name="enqoff" value={forminput.enqoff} onChange={FormData} className="bg-white/80 inputfield  " type="text" placeholder="Offer in percentage" />
          </div>
          <div className="flex flex-col w-[75%] md:w-[75%] sm:w-[75%]">
            <label className="labelfield">Next&nbsp;followup</label>
            <input name="enqnfup" value={forminput.enqnfup} onChange={FormData}
              type="date"
              className="bg-white/80 inputfield  "
            />
          </div>
         
        </div>
        <div className=" w-[100%] md:w-[50%]  sm:w-[50%] flex flex-col justify-evenly items-center">
          
          <div className="flex flex-col w-[75%] md:w-[75%] sm:w-[75%]">
            <label className="labelfield">Counsellour&nbsp;name</label>
            <input name="enqcouname" value={forminput.enqcouname} onChange={FormData}
              type="text"
              className="bg-white/80 inputfield  "
              placeholder="Counsellour Name"
            />
          </div>
          <div className="flex flex-col w-[75%] md:w-[75%] sm:w-[75%]">
            <label className="labelfield">Demo&nbsp;faculty&nbsp;name</label>
            <input name="enqdemofname" value={forminput.enqdemofname} onChange={FormData}
              type="text"
              className="bg-white/80 inputfield  "
              placeholder="Faculty Name"
            />
          </div>
          <div className="flex flex-col w-[75%] md:w-[75%] sm:w-[75%]">
            <label className="labelfield">Demo&nbsp;date</label>
            <input name="enqdemodate" value={forminput.enqdemodate} onChange={FormData}
              type="date"
              className="bg-white/80 inputfield  "
            />
          </div>
          <div className="flex flex-col w-[75%] md:w-[75%] sm:w-[75%]">
            <label className="labelfield">Demo&nbsp;mode</label>
            <input name="enqdemode" value={forminput.enqdemode} onChange={FormData}
              type="text"
              className="bg-white/80 inputfield  "
              placeholder="Faculty Name"
            />
          </div>
        </div>
       
      </section>

      {/* file details */}

        <h4 className="text-2xl mt-5 sectionHead">File&nbsp;Details</h4>
     <section className="flex flex-col  sm:w-[100%] sm:flex-col items-center md:w-[100%] md:flex-row  justify-evenly">

        <div className="flex w-[100%] md:w-[50%] sm:w-[50%] flex-col justify-evenly items-center">
          <div className="flex w-[75%] md:w-[75%] sm:w-[75%] flex-col">
            <label className="labelfield">Created&nbsp;On</label>
            <input name="enqcreateon" value={forminput.enqcreateon} onChange={FormData} className="bg-white/80  inputfield   "type="date" disabled />
          </div>
        </div>

        <div className=" w-[100%] md:w-[50%]  sm:w-[50%] flex flex-col justify-evenly items-center">
          <div className="flex w-[75%] md:w-[75%] sm:w-[75%] flex-col">
            <label className="labelfield">Created&nbsp;By</label>
            <input name="enqcreateby" value={forminput.enqcreateby} onChange={FormData} className="bg-white/80  inputfield   "type="text" disabled />
          </div>  
        </div>
      </section>

     <div className="w-full text-center">
       {/* <button className="text-center text-white rounded my-10 cursor-pointer shadow-xl hover:bg-orange-500 bg-orange-400 px-4 py-1">Submit</button> */}
       <input type='submit' className="text-center text-white rounded my-10 cursor-pointer shadow-xl hover:bg-orange-500 bg-orange-400 px-4 py-1" value="Register"/>
     </div>
        </form>
    </div>
  );
}
export default App;
