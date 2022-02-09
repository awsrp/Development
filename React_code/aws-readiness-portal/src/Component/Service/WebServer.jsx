import React from 'react';
import HeaderDashboad from '../HeaderDashboad';
import Sidebar from '../Sidebar';

const WebServer = () =>{
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
                <td><h1>1. Please select your application tier </h1></td>
            </tr>
            <tr>
                <td>
                <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                    <option value="option 1">3-tier</option>
                    <option value="option 2">2-tier</option>
                    <option value="option 2">1-tier</option>
                    </select>
                </td>
            </tr>
            <hr/>
                <tr>
                    <td>
                    <h1>2. Please select type of website hosted environment:</h1>
                    <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                    <option value="option 1">Windows</option>
                    <option value="option 2">Linux</option>
                    </select>
                    </td>
                </tr>
                <hr/>
                <tr>
                    <td>
                    <h1>3. How many Web servers are present in your current On-prem Env cluster</h1>
                    <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                    <option value="option 1">2-4</option>
                    <option value="option 2"> 4-8</option>
                    <option value="option 1">8to12</option>
                    <option value="option 1">12</option>
                    </select>
                    </td>
                </tr>
                <hr/>
                <tr>
                    <td>
                    <h1>4. What is the number of CPU per server</h1>
                    <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                    <option value="option 1">2 CPU</option>
                    <option value="option 2"> 4 CPU</option>
                    <option value="option 1">6 - 8</option>
                    <option value="option 1"> above 8</option>
                    </select>
                    </td>
                </tr>
                <hr/>
                <tr>
                    <td>
                    <h1>5. What is the total Memory assigned per server</h1>
                    <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                    <option value="option 1">1-2GB</option>
                    <option value="option 2">  4-8</option>
                    <option value="option 1">8-16</option>
                    <option value="option 1">32 or above</option>
                    </select>
                    </td>
                </tr>
                <hr/>
                <tr>
                    <td>
                    <h1>6. What is your current user base</h1>
                        <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                        <option value="option 1">upto 10k</option>
                        <option value="option 2">upto 500k</option>
                        <option value="option 1">2-5 M</option>
                        <option value="option 1">10M or above</option>
                        </select>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                    <button type="submit" className="save" style={{float: 'right'}}>Submit</button>
                    </td>
                </tr>
                
            </table>
            
            </form>
        </div>

           </div>
       </div>     
       </div>

    
);
}

export default WebServer;