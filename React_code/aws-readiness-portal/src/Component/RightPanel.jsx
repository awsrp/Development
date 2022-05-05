import 'bootstrap/dist/css/bootstrap.css';
import '../Login/Login.css';
import {Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const RightPanel = (props) =>{

const history = useHistory();

const[savemsg, setsavemsg] = useState('');

const[empLogin, setempLogin] = useState({
    username:"",
    password:"",
  });

   const onChange = (event) =>{

    const{name, value} = event.target;

    setempLogin((preValue) => {
      console.log(preValue);
      return{
        ...preValue,
        [name]:value,
      };        
    })

  }

    const handleLogin = (event) => {
    //const handleLogin = async event => {
    event.preventDefault();
    console.log(event.target.value);
    console.log("user data :", empLogin);
    setempLogin({
      username:event.target.form[0].value,
      password:event.target.form[0].value,
    });
    console.log("login data :", empLogin);
     const response = axios.post(
         "http://127.0.0.1:8000/user/loginValidation",
         empLogin
       ).then( resp =>{
        console.log("INSIDE THEN" + JSON.stringify(resp));
        if(!resp.data.includes("Valid")){
          setsavemsg(resp.data)
        } else{
          history.push('/dashboard');
        }
       }).catch(error=>{
        setsavemsg("Invalid login")
       });
       console.log(response);    
   // history.push('/dashboard');
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
    <tbody>
    <tr>
    <td >
    <span style={{color:'red'}}>{savemsg}</span>
    <div className="label">Username</div>
    </td></tr>
     <tr><td>
      <input className="textBox" type="text" autocomplete="off"
     onChange={onChange} value={empLogin.username} name="username"  placeholder="Enter your name"/>
     </td></tr> 
    <tr><td>
     <div className="label">Password</div>
     </td></tr>
   <tr><td>
   <input className="textBox" type="password" autocomplete="off"
   onChange={onChange}  value={empLogin.password} name="password" placeholder="Enter your password" oncopy="return false" 
   onpaste="return false"/></td></tr>
    </tbody></table>
    
    <Link to={'/forgot'} className="nav-link"><u>Forgot Password</u></Link> 
    <Link to={'/signup'} className="nav-link"><u>Registration</u></Link>
	
    <button type="submit" onClick={handleLogin} className="save">Login</button>
</form>
</div>
</div>
</div>
    )
}


export default RightPanel;