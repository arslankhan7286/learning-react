import React, { Component } from "react";
import SimpleMenu from "./nav-bar";
import SimpleModal from "./footer";
import Header from "./header";

import {login, register} from '../Actions/authentication';


class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Login: true,
      Register: false,
      registerValues: {},
      loginValues: {},
      errorPassword: false,
      errorEmail: false
    };
  }

  handleRegister = () => {
     register(this.state.registerValues);
     this.props.history.push("/book-now");
  }

  handleLogin =  () => {
     login(this.state.loginValues)
  }

  handleRegisterValues = (e) => {
      let data=this.state.registerValues;
      data[e.target.name]=e.target.value;
      this.setState({data});
  }

  handleLoginValues = (e) => {
    let data=this.state.loginValues;
      data[e.target.name]=e.target.value;
      this.setState({data});
  }

  render() {
      console.log("test", this.state)
    const { Login, Register } = this.state;
    return (
      <div>
        <div className="bckground">
          <img src="/images/background-full-new-york-city.jpg" />
        </div>
        <div className="accounts">
          <Header />
          <SimpleMenu />
            <div className="sign-up">
              <div className="button">
                <button
                  id="login"
                  onClick={() =>
                    this.setState({
                      Login: true,
                      Register: false,
                      errorEmail: false,
                      errorPassword: false,
                      loginValues: {
                          email: "",
                          password: ""
                      }
                    })
                  }
                  className={Login ? "Button-active" : ""}
                >
                  {" "}
                  Login{" "}
                </button>
                <button
                  id="register"
                  onClick={() =>
                    this.setState({
                      Login: false,
                      Register: true
                    })
                  }
                  className={Register ? "Button-active" : ""}
                >
                  {" "}
                  Register{" "}
                </button>
              </div>
              <div className={`${Login ? " show " : "hide"} Login`}>
                <input name="email" value={this.state.loginValues["email"]} onChange={this.handleLoginValues} placeholder="Email" /><br/>
                <div className={this.state.errorEmail ? "show error" : "hide"}>Incorrect Email</div>
                <input type='password' name="password" value={this.state.loginValues["password"]} onChange={this.handleLoginValues} placeholder="Password" /><br/>
                <div className={this.state.errorPassword ? "show error" : "hide"}>Incorrect Password</div>
                <button onClick= {this.handleLogin}> Log In </button><br/>
                <a>Reset Your Password</a>
              </div>
              <div className={`${Register ? " show error" : "hide"} Register`}>
                <input name="firstName" value={this.state.registerValues["firstName"]} onChange={this.handleRegisterValues} placeholder="First Name" /><br/>
                <input name="lastName" value={this.state.registerValues["lastName"]} onChange={this.handleRegisterValues} placeholder="Last Name" /><br/>
                <input name="phone" value={this.state.registerValues["phone"]} onChange={this.handleRegisterValues} placeholder="Phone" /><br/>
                <input name="email" value={this.state.registerValues["email"]} onChange={this.handleRegisterValues} placeholder="E-mail" /><br/>
                <input type="password" name="password" value={this.state.registerValues["password"]} onChange={this.handleRegisterValues} placeholder="Password" /><br/>
                <button onClick= {this.handleRegister}> Register </button>
              </div>
            </div>
          </div>
        <SimpleModal />
      </div>
    );
  }
}

export default Accounts;
