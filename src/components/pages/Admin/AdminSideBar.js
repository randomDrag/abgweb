import React, { Component } from "react";
import { FaUserAlt , FaSignOutAlt  , FaPlus} from "react-icons/fa";
import { connect } from "react-redux";

import {changeButton} from '../../../actions'

const SideBarIcon = ({ icon ,onClick ,text = 'tooltip'}) => {

    return (
        <div onClick={onClick} className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
{text}
        </span>
    </div>
    )
   
 }
class AdminSideBar extends Component {
  render() {
    return (
      <div className=" relative fixed top-0 left-0 w-16 h-screen m-0 flex flex-col bg-blue-800 text-white shadow-lg">
        
      
        <SideBarIcon onClick={ () => this.props.changeButton(1)} icon={<FaUserAlt size={26}/>} text={'member list'} />
        <SideBarIcon onClick={ () => this.props.changeButton(2)} icon={<FaPlus size={26}/>} text={'add Member'} />

        <SideBarIcon onClick={ () => this.props.changeButton(3)} icon={<FaSignOutAlt size={26}/>} text={'logout'} />
    
       
      </div>
    );
  }




}

const mapStateToProps = (state) => ({

})

export default  connect( mapStateToProps ,{
  changeButton
}

)(AdminSideBar)