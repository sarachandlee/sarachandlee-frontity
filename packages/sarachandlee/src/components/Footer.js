import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
            <footer className="py-3 my-4 border-top bg-dark text-white">
                <div className="container d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="text-muted">&copy; 2021 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="text-muted" href="https://github.com/sarachandlee" target='_blank'>
                                <FontAwesomeIcon icon={['fab', 'github-alt']} />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="https://twitter.com/sara_chandlee" target='_blank'>
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

    )
}

export default Footer