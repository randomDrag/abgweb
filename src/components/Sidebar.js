import React, { Component } from "react";
import { FaUserAlt , FaSignOutAlt } from "react-icons/fa";
const SideBarIcon = ({ icon , text = 'tooltip'}) => {

    return (
        <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
{text}
        </span>
    </div>
    )
   
 }
export default class Sidebar extends Component {
  render() {
    return (
      <div className=" relative fixed top-0 left-0 w-16 h-screen m-0 flex flex-col bg-blue-800 text-white shadow-lg">
        
        <SideBarIcon icon={<FaUserAlt size={26}/>} text={'User'} />
        <SideBarIcon icon={<FaSignOutAlt size={26}/>} text={'logout'} />
    
       
      </div>
    );
  }




}
