import axios from "axios";
import LOGO from "./LOGO.svg";
import one from "./one.webp";
import two from "./two.webp";
import three from "./three.webp";
import four from "./four.webp";
import five from "./three.webp";
import {useNavigate } from "react-router-dom";
import "./Home.css";
import { useState } from "react";
import Login from "./Login";
export default function App() {
  const [profilefor, setProfilefor] = useState("");
  const [name, setName] = useState("");
  const [phone, setMobilenumber] = useState("");
  const handleClicking = (e) => { 
    let url = "http://localhost:8000/register";
    let req = { profilefor: profilefor, name: name, mobilenumber: phone };
    let header = {};
    
    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data.insertId);
        localStorage.setItem("userid",res.data.insertId)
      })
      .catch();
    navigate("/Registration");
  };
  const navigate = useNavigate();
  const [show,setShow]=useState(false)
  const handleclicklogin = (e) => {
    // navigate("/login");
    setShow(true)
  };
  return (
    
    <div>
      <Login show={show} setShow={setShow}/>
      <div className="Home_head">
        <div className="Home_head_clm1">
          <div className="Home_head_clm1_logo">
            <img src={LOGO}></img>
          </div>
          <div className="Home_head_clm1_label">
            <label className="Clm1_label_up">ChristianMatrimony.com</label>
            <label className="Clm1_label_low">From Matrimony.com Group</label>
          </div>
        </div>
        <div className="Home_head_clm2">
          <label>Already a member?</label>
          <button onClick={handleclicklogin}>Log In</button>
        </div>
      </div>
      <div className="Home_body">
        <div className="Home_body_clm">
          <label className="Home_body_clm_label1">
            No. 1 and official matrimony service exclusively for Christians
          </label>
          <label className="Home_body_clm_label2">
            Meet your Christian soulmate here!
          </label>
          <div className="Home_body_clm_box">
            <div className="Home_body_clm_box_one">
              <label>Matrimony Profile For</label>
              <select
                name=""
                onChange={(e) => {
                  setProfilefor(e.target.value)
                }}
              >
                <option value="SELECT">SELECT</option>
                <option value="Self">Self</option>
                <option value="Relative">Relative</option>
                <option value="Friend">Friend</option>
              </select>
            </div>
            <div className="Home_body_clm_box_two">
              <label>Name</label>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value)
                }}
              ></input>
            </div>
            <div className="Home_body_clm_box_three">
              <label>Mobile Number</label>
              <input
                type="text"
                onChange={(e) => {
                  setMobilenumber(e.target.value)
                }}
              ></input>
            </div>
            <div className="Home_body_clm_box_btn">
              <button
                onClick={(e) => {
                  handleClicking(e)
                }}
              >
                Register Free
              </button>
            </div>
          </div>
          <div className="Home_body_clm_box2">
            <label>
              By clicking on Register Free, you agree toTerms & Conditions and
              Privacy Policy
            </label>
          </div>
        </div>
      </div>
      <div className="Footer">
        <div className="F">
          <img src={one} />
          <label>
            0+ years of service in helping Christians cherish the meaning of
            Happy marriage
          </label>
        </div>
        <div className="F">
          <img src={two} />
          <label>
            2 Lakh+ people have found their life partner using our services
          </label>
        </div>
        <div className="F">
          <img src={three} />
          <label>
            2020's winner of 'India's Growth Champions Award' by The Economic
            Times
          </label>
        </div>
        <div className="F">
          <img src={four} />
          <label>
            1 Lakh+ genuine profiles with 100% verified phone numbers
          </label>
        </div>
        <div className="F">
          <img src={five} />
          <label>130+ branches across India to serve you better</label>
        </div>
      </div>
    </div>
  );
}
