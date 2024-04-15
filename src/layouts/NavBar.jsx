import { Link } from "react-router-dom";
import "../styles/NavBar.css"
import Grouplogo from '../assets/Group 1 (1).png'
import Grouplogo2 from "../assets/Group 2.png"
import NewTasksLogo from "../assets/New Task.png"
import AllTaskLogo from "../assets/All Tasks.png"
import EditTasksLogo from "../assets/EditTasksLogo.png"
import React from "react";
const NavBar = () => {
  return (
    <nav className="nav-container">
      {/* <h1>NavBar</h1> */}
      <ul>
        <li>
           <Link to='/'> <img src={Grouplogo2} alt="" /> </Link>
        </li> 

        <li>
            <Link to='/newtasks'> <img className="imgae-fluid" src={NewTasksLogo} alt="" /> </Link>
        </li>

        <li>
            <Link to='/alltasks'> <img src={AllTaskLogo} alt="" /> </Link>
        </li>

        <li>
            <Link to='edittask'> <img src={EditTasksLogo} alt="" /> </Link>
        </li>
      </ul>

    </nav>
  );
};

export default NavBar;
