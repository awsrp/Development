import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderDashboad from '../HeaderDashboad';
import Sidebar from '../Sidebar';

const DatabaseReport = (props) =>
{
    const actions = [
        { label: "Add", value: 1 },
        { label: "Edit", value: 2 },
        { label: "Delete", value: 3 }
      ];

      const history = useHistory();

      const backQuestion = () =>{
          history.push('/database');
      }

    
    return(

        <div className="container-fluid">
        <div className="row">
        <HeaderDashboad></HeaderDashboad>
      </div>
       <div className="row" >
           <div className="col-4">
               <Sidebar></Sidebar>
           </div>
           <div className="col-8">          

           <div className="row" style={{marginTop:'30px'}}>            
            <form>
            <table>
            <tr><td>
                <h3 style={{marginLeft: '200px'}}>AWS Recommendations</h3>
            </td></tr><br></br>
                <tr>
                    <td>
                    <h1>Database </h1>
                    <span><strong>Amazon Aurora/Amazon RDS/Amazon Redshift</strong></span>
                    </td>
                </tr>
                <hr/>
                <tr>
                    <td>
                    <h1> Model</h1>
                    <span><strong>db.t3.xlarge</strong></span>
                    </td>
                </tr>
                <hr/>
                <tr>
                    <td>
                    <h1> Core Count:</h1>
                    <span><strong>2</strong></span>
                    </td>
                </tr>
                <hr/>
                <tr>
                <td>
                    <h1> vCPU :</h1>
                    <span><strong>4</strong></span>
                    </td>
                </tr>
                <hr/>
                <tr>
                <td>
                    <h1> CPU credits/hour :</h1>
                    <span><strong>96</strong></span>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                    <button type="submit" style={{float: 'right', width: '150px'}} className="save" >Download PDF</button><span></span>
                    <button type="submit" style={{float: 'right', width: '150px'}} className="save" onClick={backQuestion}>BackToQuestion</button>
                    </td>
                </tr>
                
            </table>
            
            </form>
        </div>

           </div>
       </div>     
       </div>




       

    )
}

export default DatabaseReport;