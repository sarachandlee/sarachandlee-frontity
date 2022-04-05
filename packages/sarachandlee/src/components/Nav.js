import React from 'react'
import Link from "@frontity/components/link"
import { connect } from 'frontity'

const Nav = ({ state }) => {
    return (
        <nav>
            <ul className="nav nav-pills">
            {state.theme.menu.map(([name,link]) => (
                    <li className='nav-item' key={name}>
                        <Link link={link} className='nav-link'>{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        
    )
}

export default connect(Nav)