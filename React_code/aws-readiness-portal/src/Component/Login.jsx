import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../Login/Login.css';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import HeaderDashboad from "./HeaderDashboad";
import Header from "../Shared/Header";


const Login = () => {
    return (
    <div className="container-fluid">
    <div className="row">
      <Header></Header>
    </div>
      <div className="row">
        <div className="col-md-9">
          <LeftPanel></LeftPanel>
        </div>
        <div className="col-md-3">
          <RightPanel></RightPanel>
        </div>
      </div>
      
    </div>
    );
    }
    
    export default Login;