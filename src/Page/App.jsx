import React from 'react';
import { Router,Route,hashHistory } from 'react-router';

//一级菜单
import Goods from './Goods';
import Music from './Music';
import Singer from './Singer';
import Home from './Home';
import './style.css'

//二级菜单
import imagineDragon from './Singer/imagineDragon';
import TheScore from './Singer/TheScore';
import Maroon5 from './Singer/Maroon5';

//详情页
import Details from '../Page/Details';

export default class App extends React.Component{
  render(){
    return(
      <Router history={ hashHistory }>
          <Route path='/' component={ Home }></Route>
          <Route path='/goods' component={ Goods }></Route>
          <Route path='/singer' component={ Singer }>
                <Route path='/singer/imagineDragon' component={ imagineDragon }></Route>
                <Route path='/singer/Maroon5' component={ Maroon5 }></Route>
                <Route path='/singer/TheScore' component={ TheScore }></Route>
          </Route>
          <Route path='/music' component={ Music }></Route>
          <Route path='/details/:type' component={ Details }></Route>
      </Router>
    )
  }
};
