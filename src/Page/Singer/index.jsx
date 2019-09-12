import React from 'react';
import Nav from '../Componet/Nav'
import { Link } from 'react-router'


export default class Singer extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <div>
                    <ul className='leftNav'>
                        <li>
                            <Link activeClassName='active' to='/Singer/Maroon5'>Maroon5</Link>
                        </li>
                        <li>
                            <Link activeClassName='active' to='/Singer/TheScore'>TheScore</Link>
                        </li>
                        <li>
                            <Link activeClassName='active' to='/Singer/imagineDragon'>imagineDragon</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
}