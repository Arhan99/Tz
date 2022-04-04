import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Table from './components/table';
import Auth from './components/Auth/AuthContainer';
import Contacts from './components/Contacts/ContactsContainer';
import Header from './components/Header/HeaderContainer';


function App() {
  return (
      <div>
        <Header />
          <Routes>
              <Route path='/' element={<Auth />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/table' element={<Table />} />
          </Routes>

      </div>
  );
}

export default App;
