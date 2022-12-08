import axios from "axios";
import LOGO from "./LOGO.svg";
import logo3 from "./logo3.png";
import hback from "./hback.jpg";
import blurpic from "./blurpic.webp";
import { useState, useEffect } from "react";
import "./Page.css";
export default function Page() {
  const[Arrayuser,setUsers]=useState([]);
  useEffect(() => {
    let url = "http://localhost:8000/users";
    let req = {};
    let header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch();
  }, []);

  const[profileid,clickonimg]=useState("");
  console.log(profileid);

  return (
    <div>
      <div className="Page_head">
        <img src={hback} />
        <div className="Page_head_box">
          <div className="Page_head_col1">
            <div className="Page_head_col1_logo1">
              <img src={LOGO}></img>
            </div>
            <div className="Page_head_col1_list">
              <ul>
                <li>MY HOME</li>
                <li>SEARCH</li>
                <li>MATCHES</li>
                <li>MAILBOX</li>
                <li>UPGRADE NOW</li>
              </ul>
            </div>
            <div className="Page_head_col1_logo2">
              <img src={logo3}></img>
            </div>
          </div>
          <div className="Page_head_col2">
            <input type="text" placeholder=""></input>
            <button>SEARCH</button>
          </div>
        </div>
      </div>
      <div className="Page_body">
        <div className="Page_body_list">
          {Arrayuser.map((itm, index) => {
            return (
              <>
                <div className="Page_body_list_one">
                  <img src={blurpic}  onClick={(e) => {
                  clickonimg(itm.id)
                }} />
                  <div className="Page_body_list_one_label">
                    <div className="Page_body_list_one_label_row1">
                      <label>{itm.txtUsername}</label>
                    </div>
                    <div className="Page_body_list_one_label_row">
                      <label>Address: {itm.txtAddress}</label>
                    </div>
                    <div className="Page_body_list_one_label_row">
                      <label>Height: {itm.txtHeight}</label>
                    </div>
                    <div className="Page_body_list_one_label_row">
                      <label>Religion:{itm.txtReligion}</label>
                      <label>,{itm.txtCast}</label>
                    </div>
                    <div className="Page_body_list_one_label_row">
                      <label>Education: {itm.txtEducation}</label>
                    </div>
                    <div className="Page_body_list_one_label_row">
                    <label>Profession: {itm.txtProfession}</label>
                    </div>
                    <div className="Page_body_list_one_label_row">
                      <label>Mothertongue: {itm.txtMothertoungue}</label>
                      {/* <label>Never Married</label> */}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {/* <div className="Page_body_list_one">
            <img src={blurpic} />
            <div className="Page_body_list_one_label">
              <div className="Page_body_list_one_label_row1">
                <label>WTTR**</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>26 Year, 5'5"</label>
                <label>BHMS</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Mumbai</label>
                <label>Doctor</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Hindu,Brahmin</label>
                <label>₹ 0 - 1 Lack</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Bhumihar</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Hindi-UP/UK</label>
                <label>Never Married</label>
              </div>
            </div>
          </div>
          <div className="Page_body_list_one">
            <img src={blurpic} />
            <div className="Page_body_list_one_label">
              <div className="Page_body_list_one_label_row1">
                <label>WTTR**</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>26 Year, 5'5"</label>
                <label>BHMS</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Mumbai</label>
                <label>Doctor</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Hindu,Brahmin</label>
                <label>₹ 0 - 1 Lack</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Bhumihar</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Hindi-UP/UK</label>
                <label>Never Married</label>
              </div>
            </div>
          </div>
          <div className="Page_body_list_one">
            <img src={blurpic} />
            <div className="Page_body_list_one_label">
              <div className="Page_body_list_one_label_row1">
                <label>WTTR*</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>26 Year, 5'5"</label>
                <label>BHMS</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Mumbai</label>
                <label>Doctor</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Hindu,Brahmin</label>
                <label>₹ 0 - 1 Lack</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Bhumihar</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Hindi-UP/UK</label>
                <label>Never Married</label>
              </div>
            </div>
          </div>
          
          </div><div className="Page_body_list_one">
            <img src={blurpic} />
            <div className="Page_body_list_one_label">
              <div className="Page_body_list_one_label_row1">
                <label>WTTR**</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>26 Year, 5'5"</label>
                <label>BHMS</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Mumbai</label>
                <label>Doctor</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Hindu,Brahmin</label>
                <label>₹ 0 - 1 Lack</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Bhumihar</label>
              </div>
              <div className="Page_body_list_one_label_row">
                <label>Hindi-UP/UK</label>
                <label>Never Married</label>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}
