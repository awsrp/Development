import React from 'react';
import Home from './Home';
import Sidebar from './Sidebar';
import {BrowserRouter} from 'react-router-dom';

const Category = () => {  
    
  return (
    <>
     <div className="row">
         <div className="col-5">
             <Sidebar></Sidebar>
         </div>
         <div className="col-7">
         <h1>Category page</h1>
         </div>
     </div>
    </>
  );
};

export default Category;