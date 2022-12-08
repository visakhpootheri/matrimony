import {useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LOGO from "./LOGO.svg";
import logo2 from "./logo2.webp";
import "./Registration.css";
export default function Registration() {

  const [Dateofbirth, setDOB] = useState("");
  const [Religion, setDenomination] = useState("");
  const [Caste, setCaste] = useState("");
  const [Languages, setMothertongue] = useState("");
  const [Emailid, setEmailid] = useState("");
  const [Passwordid, setPassword] = useState("");
  
  const [Array, setArray] = useState([]);
  const [Array1, setArray1] = useState([]);
  const [Array2, setArray2] = useState([]);
  

  const handleClick = (id) => {
    console.log("id", id);
    // const setReligionid =(e) =>{
    let url2 = "http://localhost:8000/fetchcast";
    let req2 = { idr: id };
    let header2 = {};
    axios
      .post(url2, req2, header2)
      .then((res) => {
        setArray2(res.data);
        console.log(res.data);
      })
      .catch();
  };
  const navigate = useNavigate();
  const registration = () => {
    var iduser=localStorage.getItem("userid");
    let url3 = "http://localhost:8000/update";
    let req3 = {idu:iduser,dateofbirth:Dateofbirth,denomination:Religion,division:Caste,mothertongue:Languages,email:Emailid,password:Passwordid};
    console.log(req3)
    let header3 = {};
    axios
      .post(url3, req3, header3)
      .then((res) => {
        console.log(res.data);
      })
      .catch();
      navigate("/login");
  };
  useEffect(() => {
    let url = "http://localhost:8000/fetchmothertoungue";
    let req = {};
    let header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        setArray(res.data);
        console.log(res.data);
      })
      .catch();
    let url1 = "http://localhost:8000/fetchreligion";
    let req1 = {};
    let header1 = {};
    axios
      .post(url1, req1, header1)
      .then((res) => {
        setArray1(res.data);
      })
      .catch();
  }, []);
  return (
    <div>
      <div className="Head">
        <div className="Hlogo">
          <img src={LOGO} alt=" "></img>
        </div>
        <div className="Htext">
          <label className="Upper">ChristianMatrimony.com</label>
          <label className="Lower">From Matrimony.com Group</label>
        </div>
      </div>
      <div className="Midbody">
        <div className="Mupper">
          <label>
            Great! You have completed{" "}
            <span>
              <b>20%</b>
            </span>
          </label>
        </div>
        <div className="Column">
          <div className="leftbody">
            <img src={logo2} alt=" "></img>
            <label>Trusted by Christians across the world!</label>
          </div>
          <div className="rightbody">
            <label className="rtext">
              Please provide us with your basic details
            </label>
            <div className="list">
              <label>Date of birth</label>
              <input type="text" onChange={(e) => {
                  setDOB(e.target.value)
                }}></input>
            </div>
            <div className="list">
              <label>Denomination</label>
              <select onChange={(e) => {
                  setDenomination(e.target.value)
                }}
                // onChange={(e)=>{setReligionid(e.target.value)}}
                onClick={(e) => {
                  handleClick(e.target.value);
                }}
              >
                <option>select</option>
                {Array1.map((itm, index) => {
                  return (
                    <>
                      <option value={itm.id}>{itm.txtReligion}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="list">
              <label>Division</label>
              <select onChange={(e) => {
                  setCaste(e.target.value)
                }}>
                <option>select</option>
                {Array2.map((itm, index) => {
                  return (
                    <>
                      <option value={itm.id}>{itm.txtCast}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="list">
              <label>Subcaste (optional)</label>
              <input type="text" placeholder=""></input>
            </div>
            <div className="list">
              <label>Mother tongue</label>
              <select onChange={(e) => {
                  setMothertongue(e.target.value)
                }}>
                <option>select</option>
                {Array.map((itm, index) => {
                  return (
                    <>
                      <option value={itm.id}>{itm.txtMothertoungue}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="list">
              <label>Email id</label>
              <input type="text" onChange={(e) => {
                  setEmailid(e.target.value)
                }}></input>
            </div>
            <div className="list">
              <label>Password</label>
              <input type="text" onChange={(e) => {
                  setPassword(e.target.value)
                }}></input>
            </div>
            <div className="Btn">
              <button
                onClick={(e) => {
                  registration(e);
                }}
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
        <div className="Footer">
          <label>Copyright © 2022. All rights reserved.</label>
        </div>
      </div>
    </div>
  );
}
