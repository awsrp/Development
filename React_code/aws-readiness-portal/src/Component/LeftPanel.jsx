import 'bootstrap/dist/css/bootstrap.css';
import '../Login/Login.css';

function LeftPanel(){
    return(
        <div className="container_8 grid_6 alpha">
        <div className="clear"></div>
        <div className="cms_content">
        <div className="clear"></div><br/><h1 style={{marginLeft: '10px'}}>Welcome to  AWS Readiness Portal</h1>
        <br></br>
        <h2 style={{marginLeft: '10px'}}>About Portal:</h2><br/>
        <p style={{marginLeft: '10px'}}>ARP (AWS READINESS PORTAL) will provide the best solution/tools/technologies of different techstack/products used in On-prem applications to migrate in AWS infrastructure. The end-users add details related to infra set up in the On-Premise application and based on the same, our portal will provide the best AWS Architecture solution.</p>
        <br/>
        <h2 style={{marginLeft: '10px'}}>This Portal helps you to : </h2>    
        <ol style={{marginLeft: '10px'}}>
            <li>store information and data for each individual employee</li>
            <li>handle queries</li>
            <li>provide solution according to user's requirement </li>
            <li>generate reports for user in order to ensure equity, transparency and objectivity in decision making</li>
        </ol>
        </div>
        </div>
    )
}

export default LeftPanel;