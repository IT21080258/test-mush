import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

import appDrawer from '../pages/dashboard/dashboard'

export default function routes({children}){
return(
    
    <BrowserRouter>
    <Routes>

      <Route 
      path='/dasboard' 
      element = {<appDrawer/>}
      />      

    </Routes>

  </BrowserRouter>
)
}