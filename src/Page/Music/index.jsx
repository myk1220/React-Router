import React from 'react';
import Nav from '../Componet/Nav';
import { Link } from 'react-router'


export default class Music extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                Music:
                <ul>
                    <li><Link to='/details/first'>first</Link></li>
                    <li><Link to='/details/second'>second</Link></li>
                    <li><Link to='/details/third'>third</Link></li>
                </ul> 
            </div>
        )
    }
}