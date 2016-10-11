import React from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory} from 'react-router';

export default class App extends React.Component {
  render () {
  	return (
      <div>
        <h1>ROD KAY</h1>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">CV/Resume</IndexLink></li>
          <li><a href="http://www.rodkay.tech" target="_blank">Website: www.rodkay.tech</a></li>
          <li><Link to="/contact" activeClassName="active">Contact: rodk1718@gmail.com</Link></li>

        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
  	);
  }
}