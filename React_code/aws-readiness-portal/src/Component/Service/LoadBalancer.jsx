import React from 'react';
import HeaderDashboad from '../HeaderDashboad';
import Sidebar from '../Sidebar';

const LoadBalancer = () =>{
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
                    <td><h1>1. What is the current Load balancer you are using</h1></td>
                </tr>
                <tr>
                    <td>
                    <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                        <option value="option 1">Enterprise level Big IP f5</option>
                        <option value="option 2">Internal Nginx/HAProxy</option>
                        <option value="option 2">Other</option>
                        </select>
                    </td>
                </tr>
                <hr/>
                    {/* <tr>
                        <td>
                        <h1>1. What is the current Load balancer you are using</h1>
                        <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                        <option value="option 1">Enterprise level Big IP f5</option>
                        <option value="option 2">Internal Nginx/HAProxy</option>
                        <option value="option 2">Other</option>
                        </select>
                        </td>
                    </tr> */}
                    <tr>
                        <td>
                        <h1>2. What type of request you are planning to handle with LB:</h1>
                        <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                        <option value="option 1">Application layer (HTTP/HTTPS) routing</option>
                        <option value="option 2">Network layer (TCP/SSL) routing</option>
                        <option value="option 1">Both A and B</option>
                        <option value="option 2">Network layer routing with scale on demand</option>
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
                        <h1>3. What is your current user base</h1>
                        <select name="selectList" id="selectList" style={{height: '28px', marginTop:'10px;'}}>
                        <option value="option 1">upto 10k</option>
                        <option value="option 2">upto 500k</option>
                        <option value="option 1">2-5 M</option>
                        <option value="option 1">10M or above</option>
                        </select>
                        {/* <input type="radio"/>2CPU
                <input type="radio"/>4
                <input type="radio"/>8 */}
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

export default LoadBalancer;