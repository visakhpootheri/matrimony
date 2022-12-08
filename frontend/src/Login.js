import {useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
// import { Navigate } from "react-router-dom";
import "./Login.css";
export default function Login({show,setShow}) {
  function closelogin(){
    setShow(false);
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    let url = "http://localhost:8000/login";
    let req = { email: username, password: password };
    let header = {};
    console.log(req);
    axios
      .post(url, req, header)
      .then((res) => {
        console.log("key",res.data.length);
        if(res.data.length>0){
          navigate("/newpage");
        }else{
          alert("NO USER");
        }
      })
      .catch();
      
  };
  return show? (
    <div className="Login_window">
      <div className="Login_page">
        <div className="Login_page_head">
          <label>
            <b>Login</b>
          </label>
          <button onClick={closelogin}>X</button>
        </div>
        <div className="Login_page_middle">
          <div className="Login_page_middle_clm1">
            <label>Matrimony Id/Mobile No./E-mail</label>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </div>
          <div className="Login_page_middle_clm2">
            <label>Password</label>
            <input
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="Login_page_middle_clm3">
            <input type="checkbox"></input>
            <label>Keep me logged in</label>
          </div>
          <div className="Login_page_middle_clm4">
            <button
              onClick={(e) => {
                handleClick(e);
              }}
            >
              LOGIN
            </button>
          </div>
          <div className="Login_Page_middle_clm5">
            <label>Forgot Password? | Login Via OTP</label>
          </div>
        </div>
        <div className="Login_page_footer"></div>
      </div>
    </div>
  ) : (
    <></>
  );
}
