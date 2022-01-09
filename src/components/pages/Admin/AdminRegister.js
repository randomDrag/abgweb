import React, { Component } from "react";
import { connect } from "react-redux";

import { LockClosedIcon } from "@heroicons/react/solid";
import { Field, reduxForm } from "redux-form";

import {AdminRegisterLogin} from '../../../actions';


const InputText = (props) => {
  const isErrorVisible = () => {
    const { error, touched } = props.meta;
    return touched && error ? <h6 className="text-red-500">{error}</h6> : null;
  };

  console.log(props.input);
  return (
    <div>
      <label htmlFor="email-address" className="sr-only">
        {props.lab}
      </label>
      <input
        //   required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={props.placeholder}
        type={props.type}
        autoComplete={props.autoComplete}
        // {...props.input}
        onChange={props.input.onChange}
        defaultValue={props.input.value}
        // {...props.input}
      />
      {isErrorVisible()}
    </div>
  );
};

export class AdminRegister extends Component {
  constructor(props) {
    super(props);

    //  this.handleSubmit = this.handleSubmit.bind(this)
    // this.Register = this.Register.bind(this)
    this.state = {
      Email: "",
      Password: "",
    };
  }

  onSubmit = () => {

    console.log(this.state.Email);

    this.props.AdminRegisterLogin(this.state.Email,this.state.Password,()=>{
alert('register')

    })
  };

  render() {
    const { handleSubmit, valid } = this.props;

    // console.log(this.props)
    return (
      <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to Register account
              </h2>
            </div>
            <div className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  {/* <Field
                    name="Name"
                    placeholder="Email"
                    //   lab={"Email"}
                    autoComplete="Email"
                    type="Email"
                    
                    component={InputText}
                  /> */}
                  <input
                    //   required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={'Username'}
                    type={'text'}
                  //  autoComplete={props.autoComplete}
                    // {...props.input}
                       onChange={(e) => this.setState({
                           Email : e.target.value
                       })}
                       defaultValue={this.state.Email}
                    // {...props.input}
                  />
                </div>
                <div>
                  {/* <Field
                    name="Password"
                    //  lab="password"
                    placeholder="Password"
                    type={"password"}
                    autoComplete="password"
                    component={InputText}
                  /> */}

                  <input
                    //   required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={'Password'}
                    type={'password'}
                   // autoComplete={''}
                    // {...props.input}
                    //    onChange={props.input.onChange}
                    //    defaultValue={props.input.value}
                    // {...props.input}
                    onChange={(e) => this.setState({Password : e.target.value})}
                    defaultValue={this.state.Password}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* <div className="flex items-center">
                              <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                              />
                              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                              </label>
                            </div>
               */}
                {/* <div className="text-sm">
                              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                              </a>
                            </div> */}
              </div>

              <div>
                <button
                  disabled={!valid}
                  //type="submit"
                  onClick={handleSubmit(this.onSubmit.bind(this))}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    AdminRegisterLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "admin" })(AdminRegister));
