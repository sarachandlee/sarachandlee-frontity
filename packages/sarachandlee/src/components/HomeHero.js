import React from 'react'
import {connect} from 'frontity'

const Hero = () => {

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img 
                        className='img-fluid'
                        src='https://www.sarachandlee.com/wp-content/uploads/2020/01/ballpen-blur-close-up-computer-461077-scaled.jpg'  
                    /> 
             
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">
                        Responsive left-aligned hero with image
                    </h1>
                    <p className="lead">
                        Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(Hero)