import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import AddGuid from './components/AddGuid';
import Service from './components/Service';
import Home from './components/Home';
import Guide from './components/main/Guide';
import Chat from './components/chat/Chat';
import Messages from './components/guides/Messages';
import Favorite from './components/main/Favorite';
import Find from './components/main/Find';
import Resrv from './components/main/Resrv';
import Reservations from './components/guides/Reservations';
import Profile from './components/guides/Profile';
import Verify from './components/admin/Verify';


function App() {
  return (
    <Router>
    <div className="App">
              <Switch>
                 <Route path="/" component={Home} exact/> 
                 <Route path="/main" component={Main} exact/> 
                 <Route path="/contact" component={Contact} />
                 <Route path="/login" component={Login} />
                 <Route path="/join" component={Register} />
                 <Route path="/login" component={Login} />
                 <Route path="/addguide" component={AddGuid} />
                 <Route path="/service" component={Service} />
                 <Route path="/search/:id" component={Guide} />
                 <Route path="/chat/:id" component={Chat} />
                 <Route path="/guides-messages" component={Messages}/>
                 <Route path="/reservations" component={Reservations}/>
                 <Route path="/profile" component={Profile} />
                 <Route path="/favorite" component={Favorite} />
                 <Route path="/find/:key" component={Find} />
                 <Route path="/verify" component={Verify} />
                 <Route path="/customer-reservations" component={Resrv} />
              </Switch>    
        <Footer/>     

    </div>
    </Router>
  );
}

export default App;
