import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';


import Main from './components/Main/Main'
import HeaderContainer from './components/Header/HeaderContainer'
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import LoginContainer from './components/Login/LoginContainer';


function App() {



  return (
  <Router>
        <div className='wrapper'>
          <HeaderContainer />
          <div className='main'>
            <Routes>
              <Route exact path='/' element={<Main />} />
              <Route path='/news' element={<News />}/>
              <Route path='/profile' element={<Profile />}/>
              
              <Route path='/login' element={<LoginContainer />}/>
              
            </Routes>
          
          </div>
        </div>
    </Router>
    
  );
}

export default App;
