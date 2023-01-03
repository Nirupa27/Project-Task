import './App.css';
import Create from './Create';
import Login from './Login';
import List from './List'


import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Link to ="/Create">Create</Link>|
      <Link to ="/Login">Login</Link>|
      <Link to ="/List"> List</Link>|
   
        <Routes>
          <Route path='/Create' element={<Create/>}></Route>|
          <Route path='/Login' element={<Login/>}></Route>|
          <Route path='/List' element={<List/>}></Route>|
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
