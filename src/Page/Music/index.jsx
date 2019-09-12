import React from 'react';
import Nav from '../Componet/Nav';
import { Link } from 'react-router'


export default class Music extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                Music:
                <div className='musicDetails'>
                    <div><Link to='/details/first'>first</Link></div>
                    <div><Link to='/details/second'>second</Link></div>
                    <div><Link to='/details/third'>third</Link></div>
                </div>
            </div>
        )
    }
}