import '../App.css';
import Login from './login'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import UseLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import Convoprovider from '../contexts/createConvo';
import Contactprovider from '../contexts/createContact';
import SocketProvider from '../contexts/createSocket';

function App() {
  let [id,setID] = UseLocalStorage('id',[])
  // console.log(id[0])
  // console.log(typeof(id[0]))
  return (
    (id[0] === undefined)?
    <div className="App">
      <Login set={setID}>
      </Login>
      </div>:
      <SocketProvider id={id[0]}>
    <Contactprovider>
      <Convoprovider id={id}>
        <div className="App">
    <Dashboard id = {id[0]}>
      </Dashboard>
      </div>
    </Convoprovider>
    </Contactprovider>
    </SocketProvider>
  );
}

export default App;
