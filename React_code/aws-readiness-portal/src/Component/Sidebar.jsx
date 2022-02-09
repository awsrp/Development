//import useState hook to create menu collapse state
import React, { useState } from "react";
import {Link} from 'react-router-dom';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle,FiDatabase } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../Style/Dashboard.css";


const Sidebar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


  return (
    <>
      <div id="header" style={{width: '250px', height: '600px'}}>
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse} >
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              {/* <p>{menuCollapse ? "Logo" : "Big Logo"}</p> */}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent style={{backgroundColor: 'lightslategray'}}>
            <Menu iconShape="square">
              {/* <MenuItem active={true} icon={<FiHome />}> */}
              <h1 >Service</h1>
              <hr/>
               {/* <MenuItem icon={<FiDatabase />}><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>Database </b></Link> </MenuItem> 
              <MenuItem icon={<RiPencilLine />}><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>Load balancer</b></Link> </MenuItem> 
               <MenuItem icon={<BiCog />}><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>Web server</b></Link> </MenuItem> 
               <MenuItem icon={<BiCog />}><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>App server</b></Link> </MenuItem> 
               <MenuItem icon={<BiCog />}><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>Containerization</b></Link> </MenuItem> 
               <MenuItem icon={<BiCog />}><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>Backup/Storage</b></Link> </MenuItem> 
               <MenuItem icon={<BiCog />}><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>Migration Strategy</b></Link> </MenuItem> 
               <MenuItem icon={<BiCog />}><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>API</b></Link> </MenuItem> 
               <MenuItem icon={<BiCog />}><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>Monitoring</b></Link> </MenuItem>  
                               */}

              <MenuItem><Link to={'/database'} className="nav-link" style={{color:'black'}}><b>Database </b></Link> </MenuItem> 
              <MenuItem><Link to={'/loadbalancer'} className="nav-link" style={{color:'black'}}><b>Load balancer</b></Link> </MenuItem> 
               <MenuItem><Link to={'/webserver'} className="nav-link" style={{color:'black'}}><b>Web server</b></Link> </MenuItem> 
               <MenuItem><Link to={'/appserver'} className="nav-link" style={{color:'black'}}><b>App server</b></Link> </MenuItem> 
               <MenuItem><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>Containerization</b></Link> </MenuItem> 
               <MenuItem><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>Backup/Storage</b></Link> </MenuItem> 
               <MenuItem><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>Migration Strategy</b></Link> </MenuItem> 
               <MenuItem><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>API</b></Link> </MenuItem> 
               <MenuItem><Link to={'/category'} className="nav-link" style={{color:'black'}}><b>Monitoring</b></Link> </MenuItem>  
                       
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;