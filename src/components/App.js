import '../App.css';
import Login from './login'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import UseLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';


function App() {
  let [id,setID] = UseLocalStorage('id',[])
  // console.log(id[0])
  // console.log(typeof(id[0]))
  return (
    (id[0] === undefined)?<div className="App"><Login set={setID}></Login></div>:<div className="App"><Dashboard id = {id[0]}></Dashboard></div>
  );
}

export default App;
