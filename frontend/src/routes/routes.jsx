import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

import Dashboard from '../pages/dashboard/dashboard'

export default function routes({children}){
return(
    
    <BrowserRouter>
    <Routes>

      <Route 
      path='/dashboard' 
      element = {<Dashboard/>}
      />      

    </Routes>

  </BrowserRouter>
)
}