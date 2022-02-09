import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';


const Login = () => {
    return (
    <div className="container-fluid">
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