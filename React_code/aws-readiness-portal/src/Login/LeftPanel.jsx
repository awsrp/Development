import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

function LeftPanel(){
    return(
        <div className="container_8 grid_6 alpha">
        <div className="clear"></div>
        <div className="cms_content">
        <div className="clear"></div><br/><h1 style={{marginLeft: '10px'}}>Welcome to  AWS Readiness Portal</h1>
        <h2 style={{marginLeft: '10px'}}>About Portal:</h2>
        <p style={{marginLeft: '10px'}}>ARP (AWS READINESS PORTAL) is a ........</p>
        <ul>
            <li>store information and data for each individual employee</li>
            <li>handle queries</li>
            <li>provide solution according to user's requirement </li>
            <li>generate reports for user in order to ensure equity, transparency and objectivity in decision making</li>
        </ul>
        </div>
        </div>
    )
}

export default LeftPanel;