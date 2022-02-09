import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from '../Component/Login';
import SignUp from '../Component/SignUp';
import ForgotPassword from '../Component/ForgotPassword';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import DashBoard from '../Component/DashBoard';
import Category from '../Component/Category';
import Users from '../Component/Users';
import Setting from '../Component/Settings';
import DatabaseComponent from './Service/DatabaseComponent';
import LoadBalancer from './Service/LoadBalancer';
import WebServer from './Service/WebServer';
import AppServer from './Service/AppServer';
import DatabaseReport from './Reports/DatabaseReport';


const App = () =>{
    return(
        <>        
      <div className="container-fluid">
    <div className="row" style={{height : '700px'}}>
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Login}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/forgot" component={ForgotPassword}></Route>
            <Route path="/dashboard" component={DashBoard}></Route>
            <Route path="/home" component={DashBoard}></Route> 
            <Route path="/category" component={Category}></Route>
            <Route path="/user" component={Users}></Route>
            <Route path="/setting" component={Setting}></Route>
            <Route path="/database" component={DatabaseComponent}></Route>
            <Route path="/loadbalancer" component={LoadBalancer}></Route>
            <Route path="/webserver" component={WebServer}></Route>
            <Route path="/appserver" component={AppServer}></Route>
            <Route path="/home" component={DashBoard}></Route>
            <Route path="/databasereport" component={DatabaseReport}></Route>
            
        </Switch>
      </BrowserRouter>
    </div>
    <div className="row">
        <Footer></Footer>
    </div>
      
     </div>
        </>
    )

}

export default App;