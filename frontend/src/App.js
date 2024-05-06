import './App.css';
import AppDrawer from './components/sidebar/appdrawer'
import Routes from './routes/routes'


function App(){
  return (
    <AppDrawer>
      <Routes style={{display:'flex'}}/>
    </AppDrawer>
  );
}

export default App;
