import React from 'react';
import { Link } from 'react-router'

export default class Nav extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to='/'>首页</Link>
                    </li>
                    <li>
                        <Link to='/goods'>商品</Link>
                    </li>
                    <li>
                        <Link to='/music'>音乐</Link>
                    </li>
                    <li>
                        <Link to='/singer'>歌手</Link>
                    </li>
                </ul>
            </div>
        )
    }
}