import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      token: localStorage.getItem("token"),
      role: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      let userStr = localStorage.getItem("user");
      let user = JSON.parse(userStr);
      let userRole = user.role;
      this.setState({ role: userRole });
    }
  }

  login = (token) => {
    this.setState({
      loggedIn: true,
    });
  };

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props} login={this.login}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props} loggedIn={this.state.loggedIn} role={this.state.role}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
