import React from 'react';
import { Link } from 'react-router'

export default class Nav extends React.Component{
    render(){
        return(
            <div className="Nav">
                <ul>
                    <li>
                        <Link activeClassName='active' to='/'>首页</Link>
                    </li>
                    <li>
                        <Link activeClassName='active' to='/goods'>商品</Link>
                    </li>
                    <li>
                        <Link activeClassName='active' to='/music'>音乐</Link>
                    </li>
                    <li>
                        <Link activeClassName='active' to='/singer'>歌手</Link>
                    </li>
                </ul>
            </div>
        )
    }
}