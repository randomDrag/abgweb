import React, { Component } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import  AdminLogin  from './components/pages/Admin/AdminLogin'
import AdminRegister from './components/pages/Admin/AdminRegister'
import DashboardAdmin from './components/pages/Admin/DashboardAdmin'
import Home from './components/pages/Member/Home'
import MemberPanel from './components/pages/Member/MemberPanel'

export default class App extends Component {
  render() {
    return (
      <Router >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/WelcomeMember" element={<MemberPanel/>} />
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/AdminWelcome" element={<DashboardAdmin/>}/>
        <Route path="/AdminRegister" element={<AdminRegister/>}/>
        {/* <Route path="/login" component={Loginpage} />
        <Route path="/user" component={this.pageRender} />
        <Route path="/about" component={About}/>
        <Route path="*" component={NotFound} /> */}
      </Routes>

    </Router>
    )
  }
}
