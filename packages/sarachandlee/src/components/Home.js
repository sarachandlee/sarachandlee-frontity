import React from 'react'
import {connect} from 'frontity'
import Portfolio from './Portfolio'
import HomeHero from './HomeHero'
import Skills from './Skills'

const Home = () => {
    return (
        <main>
            <HomeHero />
            <Portfolio postLimit='3' title='Latest Projects' />
            <Skills />
        </main>
    )
}

export default connect(Home)