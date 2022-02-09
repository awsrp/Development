import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';


const RightPanel = () =>{
const name = useState();

const btnLogin = () =>{
    console.log("hello");
    
}

    return(
        <div className="grid_2 omega">
<div className="greybox giveitroom" >
<h3 className="specialset">Login</h3>
<div className= "login_dialog">
<form action="#" accept-charset="utf-8" name="login_dialog" className="login_dialog" autocomplete="off"><div style= {{display: 'none'}}>
</div>    
	<input type="password" style= {{display: 'none'}}/>
	<table className="login_dlg_tbl" cellspacing="0" cellpadding="0" border="0" width="100%">	
    <tbody><tr><td className="specialset">Username</td></tr>
     <tr><td><input className="text" type="text" name="username" id="uname" autocomplete="off" placeholder="Enter your name"/></td></tr>
    <tr><td className="specialset">Password</td></tr>
   <tr><td>
   <input className="text noborder" type="password" name="password" id="password" autocomplete="off" placeholder="Enter your name" oncopy="return false" onpaste="return false"/></td></tr>
	
    </tbody></table>

    
    {/* <a href="#" className="floatleft">
	<u>Forgot Password</u>
	</a> */}
    
    <Link to={'/forgot'} className="nav-link">Forgot Password</Link> 
    <br/>
    <Link to={'/signup'} className="nav-link">Registration</Link>
	{/* <a href="#" className="floatleft">
	<u>Registration</u>
	</a>  */}
	<a class="fl" href="#">
	</a>
    <div className="clear"></div>		
	<br/>
    <input type="submit" className="save" name="logsubmit" id="logsubmit" value="Login" onClick={btnLogin}/>
</form>
</div>
 {/* <Routes>
 <Route exact path='/' component={Login} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route path='/forgot' component={ForgotPassword} />
              
              </Routes> */}
</div>
</div>
    )
}


export default RightPanel;