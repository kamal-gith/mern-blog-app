import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import kml from "./images/kml.jpeg"

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={kml}
          alt=""
        />
        <p>
          I'm a Full-Stack Developer and a Machine Learning Enthusiast with deep knowledge of technologies like Reactjs, Nodejs, Python, Git and lots more...
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">YOU CAN REACH ME VIA...</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/akuraidreez.kenesi" className='link'><i className="sidebarIcon fab fa-facebook-square"></i></a>
          <a href="https://www.twitter.com/_idriskamal" className='link'><i className="sidebarIcon fab fa-twitter-square"></i></a>
          <a href="https://www.linkedin.com/in/idriskamal" className='link'><i className="sidebarIcon fab fa-linkedin"></i></a>
          <a href="https://www.github.com/kamal-gith" className='link'><i className="sidebarIcon fab fa-github"></i></a>
          <a href="https://wa.me/+2348116214250" className='link'><i className="sidebarIcon fab fa-whatsapp"></i></a>
          </div>

          <div className="email-div">
          <span><h5 className='emailtitle'>Send Me an Email <i class="fas fa-envelope"></i></h5></span>
          <p className='emailaddress'>kamaldeenidreez@gmail.com</p>
          </div>
      </div>
    </div>
  );
}