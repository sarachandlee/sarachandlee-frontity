import React from 'react'
import { connect } from 'frontity'
import HeadMeta from './HeadMeta'
import Nav from './Nav'
import Link from "@frontity/components/link"

const Header = ({ state }) => {
    return (
        <>
            <HeadMeta />
            <header className="py-3 mb-4 border-bottom">
            <div className="container d-flex flex-wrap justify-content-center align-items-center ">
                <Link link={'/'} className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
                    <img 
                        src='https://www.sarachandlee.com/wp-content/uploads/2016/09/Sara-Chandlee.png' 
                        alt='Sara Chandlee logo'
                    />
                </Link>
                <Nav />
                </div>
            </header>
        </>
    )
}

export default connect(Header)