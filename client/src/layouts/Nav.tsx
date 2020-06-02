import React from 'react'
import { Link } from 'react-router-dom'

const Nav:React.FC = ({ children }) => {
    return (
        <>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            { children }
        </>
    )
}

export default Nav
