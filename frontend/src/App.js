import './App.css';
import appDrawer from './components/sidebar/appdrawer'
import routes from './routes/routes'


function App() {
  return (
    <appDrawer>
      <routes/>
    </appDrawer>
  );
}

export default App;
