import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Style.css';

function Header(){
    return (
        <div className="headingarea">
        <div className="topnavigation">
<div className="logged_in_message"></div>
     <div className="company_name" style = {{marginRight : '50px'}}>AWS READINESS PORTAL     </div>
           <div className="company_logo">
<img src= "./images/tsys_logo.jpg" alt="Company logo"/>
</div>
</div>


<div className="navigation">
<ul className="menu"><li><a href="#" class="active_top_menu">Home</a></li></ul>		</div>

</div>
    )
}

export default Header;