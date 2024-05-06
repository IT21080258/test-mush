import React from 'react';
import AppDrawer from './components/sidebar/appdrawer';
import Routes from './routes/routes';

function App() {
    return (
        <AppDrawer>
            <Routes />
        </AppDrawer>
    );
}

export default App;
