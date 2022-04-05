import React from 'react'
import { connect } from 'frontity'
import dayjs from 'dayjs'

const Post = ({ state }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const formattedDate = dayjs(post.date).format("MMMM DD, YYYY")

    return (
        <main className='container'>
            <h1>{post.title.rendered}</h1>
            {
                (data.isPost) ? <p>Posted: {formattedDate} </p>  : null
            }
            <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
        </main>
    )
}
export default connect(Post)