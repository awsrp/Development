import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Login = () => {
    return (
    <div className="container-fluid">
      <div className="row">
       <Header></Header>
      </div>
      <div className="row">
        <div className="col-md-8">
          <LeftPanel></LeftPanel>
        </div>
        <div className="col-md-4">
          <RightPanel></RightPanel>
        </div>
      </div>

      <div className="row">
         <Footer></Footer>
      </div>
    </div>
    );
    }
    
    export default Login;