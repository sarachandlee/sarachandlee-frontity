import { useEffect } from 'react'
import { connect } from 'frontity'
import Link from "@frontity/components/link"
import Loading from './Loading'

const Portfolio = ({ state, actions, postLimit, title }) => {
    useEffect(() => {
        actions.source.fetch("/portfolio");
    }, []);
    const portfolio = state.source.get("/portfolio")
    const tags = state.source.portfolio_tag

    return (
      <div className="container px-4 py-5" id="custom-cards">
        { title
          ? <h2 className='pb-2 text-center'>{title}</h2>
          : null
        }
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          { portfolio && portfolio.isReady ?
                portfolio.items
                .slice( 0, postLimit ? postLimit : portfolio.length)
                .map( (item) => {
                    const post = state.source[item.type][item.id]
          
                    const featuredImg = state.source.attachment[post.featured_media]
                    const postTags = post.portfolio_tag
                    return (
                      <div className='col' key={item.id}>
                        <div className="card">
                          <img src={featuredImg.source_url} className="card-img-top" />
                          <div className="card-body">
                            <h5 className="card-title">{post.title.rendered}</h5>
                            <p className="card-text">
                              {
                                postTags 
                                  ? postTags.map((tag) => {
                                    return <Link className='me-2 btn btn-secondary btn-sm' link={tags[tag].link} key={tag}>{tags[tag].name}</Link>
                                  })
                                  : null
                              }
                            </p> 
                            <a href="#" className="btn btn-outline-primary">View Project</a>
                          </div>
                        </div>
                      </div>
                    )
                }) 
                :
                <Loading />
          }
        </div>
      </div>
    )
}

export default connect(Portfolio)
