import React from 'react'
import { connect } from 'frontity'

import Header from './Header'
import PostList from './PostList'
import Switch from '@frontity/components/switch'
import Post from './Post'
import Home from './Home'
import Portfolio from './Portfolio'
import Loading from './Loading'
import Footer from './Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)
    console.log(data)
    return (
      <>
          <Header />
          <Switch>
              <Home when={data.isHome} />
              <Portfolio when={data.isPortfolioArchive } />
              <PostList when={data.isArchive || data.isTag} />
              <Post when={data.isPost || data.isPage } />
              <Loading />
          </Switch>
          <Footer />

      </>
    );
  };

export default connect(Root)
  