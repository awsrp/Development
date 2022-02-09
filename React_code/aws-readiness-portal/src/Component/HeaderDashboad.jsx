import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Shared/Style.css';
import {Link} from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap';

function HeaderDashboad(){

    return(
        <div className="headingarea">
    <div className="topnavigation">
<div className="logged_in_message"></div>
 <div className="company_name" style = {{marginRight : '50px'}}>AWS READINESS PORTAL     </div>
       <div className="company_logo">
<img src= "./images/tsys_logo.jpg" alt="Company logo"/>
</div>
</div>
<div className="navigation">
 <ul className="menu">
  <li className="li1"><a href="#" class="active_top_menu">Home</a></li>
  {/* <li className="li1"><a href="#">User</a></li> */}
  
  <li className="li1" style={{float: 'right'}}><Link to={'/login'} className="nav-link">Logout</Link> </li>
  <li className="li1" style={{float: 'right'}}><Link to={'/setting'} className="nav-link">Setting</Link> </li>
  <li className="li1" style={{float: 'right'}}><Link to={'/user'} className="nav-link">User</Link> </li>
  
  
  {/* <li className="li1"><a href="#">Setting</a></li> */}
  </ul>	
   </div>
   </div>
    )
}

export default HeaderDashboad;