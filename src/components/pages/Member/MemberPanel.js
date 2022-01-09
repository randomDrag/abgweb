import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../../Sidebar";

export class MemberPanel extends Component {
  render() {
    return (
      <div className="flex flex-row">
        <Sidebar />
        <div className=" flex-col w-screen justify-center items-center ">
          <h6>USER INFOMATION</h6>
          <div className='flex bg-blue-200 p-4 m-4 rounded-xl flex-col shadow-lg hover:bg-blue-800 hover:text-white transition-all duration-300'>
            <h6>hello</h6>
            <h6>email</h6>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MemberPanel);
