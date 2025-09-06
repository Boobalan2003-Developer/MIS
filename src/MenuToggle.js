import { useState } from 'react';
import sdlcLogo from './Assets/5-Indian-Design-Mark.png'
import './Loginpage.js'
import './Enquiryform.js'
import { Link } from 'react-router-dom';
function MenuToggle() {
  const [leftContent,setleftContent]=useState(false)

  const menuHide=(event)=>{
     setleftContent(prev=>!prev)
  }

  return (
    <div>
      <div>
        <nav className=" navbarSection navbar w-100 position-fixed bg-body-tertiary py-0">
          <div className="container-fluid bg-secondary">
            <img className="sdlcLogo" src={sdlcLogo} alt="" />
          </div>
        </nav>
        <section>
          <ul className=" navbar2 m-0 pe-5">
            <li>
              <Link to='/'><p>LOGIN</p></Link>
            </li>
            <li>
             <Link to='/Enquiryform'> <p>ENQUIRY&nbsp;FORM</p></Link>
            </li>
            <li>
              <Link to='/Dashboard'><p>VIEW&nbsp;LIST</p></Link>
            </li>
          </ul>
        </section>
        <section className="navbar3 bg-black container-fluid ">
          <img
          onClick={menuHide}
            className="menu_hide"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAGxJREFUSEvtlcENwCAMA/FmjMZo3SxUlfgA/TmYhxnApxyOgiJ6EHGLwcfMW/WnOiIa0zmAJW+rOl4yGbxw7gIzp/3LcqtHqytTN4BnzrurXMp10qhm/q/XaRhwq7Vn0a3OMOCzmGF1mylT3QGvpigfXkEqFAAAAABJRU5ErkJggg=="
          />
        </section>
      </div>

      {
        leftContent && <>
        <div className="left_content  bg-black">
        <li>
          <p>StudentRegistration</p>
        </li>
        <li>
          <p>Front Office</p>
        </li>
        <li>
          <Link style={{textDecoration:'none'}} to='/Enquiryform'><p>Enquiry Form</p></Link>
        </li>
        <li>
          <Link style={{textDecoration:'none'}} to='/Dashboard'><p>Enquiry View List</p></Link>
        </li>
        <li>
          <p>Online Course</p>
        </li>
        <li>
          <p>Google Meet</p>
        </li>
        <li>
          <p>Zoom Meet</p>
        </li>
        <li>
          <p>Fees Collection</p>
        </li>
        <li>
          <p>Expenses</p>
        </li>
        <li>
          <p>Examinations</p>
        </li>
      </div></>
      }
    </div>
  );
}
export default MenuToggle;
