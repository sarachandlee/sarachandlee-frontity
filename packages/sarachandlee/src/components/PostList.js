import {React, useEffect} from 'react'
import { connect } from 'frontity'
import Link from "@frontity/components/link"
import Pagination from './Pagination'

const PostList = ({ state, actions, libraries }) => {
    const Html2React = libraries.html2react.Component
    const data = state.source.get(state.router.link)

    return (
        <main className='container'>
            <ul>
                {
                    data.items.map( (item) => {
                        const post = state.source[item.type][item.id]
                        return (
                            <li key={item.id}>
                                <Link link={post.link}>
                                    {post.title.rendered}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Pagination />
        </main>
    )
}

export default connect(PostList)