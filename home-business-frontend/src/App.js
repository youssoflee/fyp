import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Customer from './pages/Customer';
import Addcustomer from './pages/Addcustomer';
import Editcustomer from './pages/Editcustomer';
import Delcustomer from './pages/Delcustomer';

function App () {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Customer} />
          <Route path="/add-customer" component={Addcustomer} />
          <Route path="/edit-customer/:id" component={Editcustomer}/>
          <Route path="/del-customer/:id" component={Delcustomer}/>
      </Switch>
    </Router>
  );
}

export default App;
