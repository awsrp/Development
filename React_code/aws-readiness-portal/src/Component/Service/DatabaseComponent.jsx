import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderDashboad from '../HeaderDashboad';
import Sidebar from '../Sidebar';

const DatabaseComponent = (props) =>
{
    const actions = [
        { label: "Add", value: 1 },
        { label: "Edit", value: 2 },
        { label: "Delete", value: 3 }
      ];

      const history = useHistory();

      const btnSubmit = (event) =>{
        event.preventDefault();
          history.push("/databasereport");
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

           <div className="row" style={{marginTop:'60px'}}>            
            <form>
            <table>
            

                <tr>
                    <td>
                    <h1>1. Please select the type of database you are currently using</h1>
                    <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                    <option value="option 1">Relational</option>
                    <option value="option 2">no-sql</option>
                    </select>
                    {/* <input type="radio"/> Relational
                    <input type="radio"/>no-sql */}
                    </td>
                </tr>
                <hr/>
                <tr>
                    <td>
                    <h1>2. What is your current database size:</h1>
                    <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                    <option value="option 1">upto 5 GB</option>
                    <option value="option 2">upto 20GB</option>
                    <option value="option 1">upto 50GB</option>
                    <option value="option 2">1TB or higher</option>
                    </select>
                    {/* <input type="radio"/>upto 5 GB
            <input type="radio"/>upto 20GB
            <input type="radio"/>upto 50GB 
            <input type="radio"/>1TB or higher */}
                    </td>
                </tr>
                <hr/>
                <tr>
                    <td>
                    <h1>3. Current CPU usage</h1>
                    <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                    <option value="option 1">2 CPU</option>
                    <option value="option 2">4 CPU</option>
                    <option value="option 1">8 CPU</option>
                    </select>
                    {/* <input type="radio"/>2CPU
            <input type="radio"/>4
            <input type="radio"/>8 */}
                    </td>
                </tr>
                <hr/>
                <tr>
                    <td>
                    <h1>4. Current Memory usage required </h1>
                    <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                    <option value="option 1">1Gb</option>
                    <option value="option 2">2-4 Gb</option>
                    <option value="option 1">4-8Gb</option>
                    <option value="option 1">8-16Gb</option>
                    <option value="option 1">16-32 Gb</option>
                    </select>
                    {/* <input type="radio"/>1Gib 
            <input type="radio"/>2Gib 
            <input type="radio"/>2-4 Gib
            <input type="radio"/>4-8Gib
            <input type="radio"/>8-16Gib
            <input type="radio"/>16-32 Gib */}
                    </td>
                </tr>
                <hr/>
                <tr>
                    <td>
                    <h1>5. What is the current user base/queries per day to db </h1>
                    <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                    <option value="option 1">upto 10k</option>
                    <option value="option 2">upto 500k</option>
                    <option value="option 1">2-5 M</option>
                    <option value="option 1">10M or above</option>
                    </select>
                    {/* <input type="radio"/>upto 10k
            <input type="radio"/>upto 500k
            <input type="radio"/>2-5 M
            <input type="radio"/>10M or above */}
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                    <button type="submit" className="save" style={{float: 'right'}} onClick={btnSubmit}>Submit</button>
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

export default DatabaseComponent;