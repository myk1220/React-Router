import React from 'react';
import { Router,Route,hashHistory } from 'react-router';
import Goods from './Goods';
import Music from './Music';
import Singer from './Singer';
import Home from './Home'


export default class App extends React.Component{
  render(){
    return(
      <Router history={ hashHistory }>
          <Route path='/' component={ Home }></Route>
          <Route path='/goods' component={ Goods }></Route>
          <Route path='/singer' component={ Singer }></Route>
          <Route path='/music' component={ Music }></Route>
      </Router>
    )
  }
};
