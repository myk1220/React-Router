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
                            <Link activeClassName='active' to='/singer/Maroon5'>Maroon5</Link>
                        </li>
                        <li>
                            <Link activeClassName='active' to='/singer/TheScore'>TheScore</Link>
                        </li>
                        <li>
                            <Link activeClassName='active' to='/singer/imagineDragon'>imagineDragon</Link>
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