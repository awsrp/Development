import React from 'react';
import Sidebar from './Sidebar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderDashboad from './HeaderDashboad';
import LoadBalancer from './Service/LoadBalancer';
import WebServer from './Service/WebServer';
import AppServer from './Service/AppServer';

import Home from './Home';
import DatabaseComponent from './Service/DatabaseComponent';
import Dashboard from './Service/Dashboard';

const DashBoard = () => {  
    
  return (
    <>
      <div className="container-fluid">
      <div className="row">
      <HeaderDashboad></HeaderDashboad>
    </div>
     <div className="row" >
         <div className="col-4">
             <Sidebar></Sidebar>
         </div>
         <div className="col-8">
         
         {/* <Switch>
         <Route exact path='/home' name="Dashboard" children={DashBoard} />
         <Route exact path='/home/database' name="Database" children={DatabaseComponent} />
        
                        </Switch> */}
           <BrowserRouter>
              <Home></Home>
         </BrowserRouter>  
         </div>
     </div>     
     </div>
    </>
  );
};

export default DashBoard;