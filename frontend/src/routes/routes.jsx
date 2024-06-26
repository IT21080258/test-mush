//get path from appDrawer.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard';
import ViewGrowShed from '../pages/growshedMgt/viewGrowShed';
import AddGrowShed from '../pages/growshedMgt/addGrowShed';
import Yield from '../pages/Yield/predictYield'
import Contamination from '../pages/contamination/contamination'

 const MRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/grow/growsheds" element={<ViewGrowShed/>} />
                <Route path="/grow/addgrowshed" element={<AddGrowShed/>}/>
                <Route path="/grow/yield" element={<Yield/>}/>
                <Route path="/grow/contamination" element={<Contamination/>}/>
            </Routes>
        </BrowserRouter>
    );
}               

export default MRoutes;
