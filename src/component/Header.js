import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return <div>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/userinfo">user</Link>
        <Link to="/qdasda">不存在</Link>
    </div>
}