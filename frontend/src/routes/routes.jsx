import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard';
import ViewGrowShed from '../pages/growshedMgt/viewGrowShed';
import AddGrowShed from '../pages/growshedMgt/addGrowShed';

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/grow/growsheds" element={<ViewGrowShed/>} />
                <Route path="/grow/addgrowshed" element={<AddGrowShed/>}/>
            </Routes>
        </BrowserRouter>
    );
}
