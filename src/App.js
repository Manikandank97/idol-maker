import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router'
import { history } from "./utils/history";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import HomePage from './components/homePage';
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';
import DashboardPage from './components/dashboardPage'
import ContactUsPage from './components/contactUsPage'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/contact-us" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
