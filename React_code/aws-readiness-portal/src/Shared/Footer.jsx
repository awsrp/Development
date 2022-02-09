import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Style.css';

function Footer(){
    return(
        <div className="footer">
<div className="footer_left">©TSYS Card tech Services Pvt. Ltd.</div>
<div className="footer_right" style={{float:'right'}}>
<a href="#" target="_blank">Privacy Policy</a> | <a href="#" target="_blank">Terms of Use</a>
| Powered by<a href="#" target="_blank"><img border="0" src="./images/tsys_logo.jpg" align="top" alt="logo"/></a></div>
</div>
    )
}

export default Footer;