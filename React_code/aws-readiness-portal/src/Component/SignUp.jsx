import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Shared/Header';
import axios from "axios";

const SignUp = () =>{

    // States for registration
    // const[fname, setfname]= useState('');
    // const[lname, setlname]=useState('');
    // const[username,setusername]=useState('');
    // const[Name, setName] = useState('');
    // const[Empid, setEmpid]= useState('');
    // const[Email, setEmail]=useState('');
    // const[Team,setTeam]=useState('');

    const[empDetails, setempDetails] = useState({
      fname:"",
      lname:"",
      username:"",
      password:"",
      empid:"",
      emailid:"",
      team:"",
    });

    const history = useHistory();
    const [savemsg, setsavemsg] = useState('');

    const inputEvent = (event) =>{

      const{name, value} = event.target;

      setempDetails((preValue) => {
        console.log(preValue);
        return{
          ...preValue,
          [name]:value,
        };        
      })

    }

    const btnSubmit = (event) =>{
      event.preventDefault();
      if(event.target.form[0].value === '' || event.target.form[1].value === '' ||
      event.target.form[2].value === '' ||  event.target.form[3].value === '' || 
      event.target.form[4].value === '' ||  event.target.form[5].value === '' ||
      event.target.form[6].value === '' )
      {
        setsavemsg("Please enter all mandatory fields");
        return false;

      } else{
        setempDetails({
          fname: event.target.form[0].value,
          lname: event.target.form[1].value,
          empid: event.target.form[2].value,
          emailid: event.target.form[3].value,
          username: event.target.form[4].value,
          password: event.target.form[5].value,
          team:event.target.form[6].value,
        });
      }
      console.log("user data :", empDetails);
     const response =  axios.post(
         "http://localhost:8000/user/signup",
         empDetails
       ).then(resp=>{
        setempDetails(resp);
       }).catch(error => {
        console.log(error);
      });
      setsavemsg("Record Saved Successfully");
      btnReset();
    }

    const btnReset = () =>{
        setempDetails({
          fname: "",
          lname: "",
          empid:"",
          emailid:"",
          username:"",
          password:"",
          team:"",
        });
    }

    const btnCancel = () =>{
      history.push('/login');
    }
  
    return(
      <>
     
      <Header/>
     
<div className="container_8 grid_6 alpha">        
<div className="page_message">
    <h1 style={{textAlign:'center'}}>Employee Registration</h1>
</div>

<div className="conteentDiv" >
<h3 style={{color:'green'}}>{savemsg}</h3>
{/* <form action="#" method="post" name="registration" id="registration"> */}
<form>
<div className="empDetailsTable noborderall" style={{marginTop:'30px'}}>
<div className="formrowtable">
<div className="formrow">
<div className="label">Employee ID <span class="mandatory_field">*</span></div>
<div className="text"><input type="text" name="empid" value={empDetails.empid} 
onChange={inputEvent} className="textBox"/></div>
</div>

<div className="formrow">
<div className="label">First Name <span class="mandatory_field">*</span></div>
<div className="text"><input type="text" name="fname"  
onChange={inputEvent} className="textBox" value={empDetails.fname}/></div>
</div>

<div className="formrow">
<div className="label">Last Name <span class="mandatory_field">*</span></div>
<div className="text"><input type="text" name="lname"  
onChange={inputEvent} className="textBox" value={empDetails.lname}/></div>
</div>

<div className="formrow">
<div className="label">User Name <span class="mandatory_field">*</span></div>
<div className="text"><input type="text" name="username"  
onChange={inputEvent} className="textBox" value={empDetails.username}/></div>
</div>

<div className="formrow">
<div className="label">Password <span class="mandatory_field">*</span></div>
<div className="text"><input type="text" name="password"  
onChange={inputEvent} className="textBox" value={empDetails.password}/></div>
</div>


<div className="formrow">
<div className="label">Email ID <span class="mandatory_field">*</span></div>
<div className="text noborder"><input type="text" name="emailid" 
onChange={inputEvent} className="textBox" value={empDetails.emailid}/></div>
</div>

<div className="formrow">
<div className="label">Employee Team <span class="mandatory_field">*</span></div>
<div className="text"><input type="text" name="team" class="label_L" maxlength="10" 
onChange={inputEvent} className="textBox" value={empDetails.team}/>
</div>
</div>


</div>
<div className="aligncenter">
<div className="btns_div" >
<input type="button" name="cancel" value="Cancel" className="cancel" style={{float : 'right',  marginRight: '50px'}} onClick={btnCancel}/>
<input type="button" name="reset" value="Reset" className="cancel" style={{float : 'right'}} onClick={btnReset}/>
<input type="submit" name="save" value="Submit" className="save" onClick={btnSubmit} style={{float : 'right'}} />
</div>
</div>
</div>

</form></div>



</div>
</>
    )
};

export default SignUp;