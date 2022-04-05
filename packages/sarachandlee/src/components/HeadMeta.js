import React from 'react'
import { connect, Head, Global, css }from 'frontity'
import bootstrap from 'bootswatch/dist/flatly/bootstrap.min.css'


const BootstrapStyles = () => {
    return (
        <>
            <Global styles={css(bootstrap)} />
        </>
        
    )
}

const HeadMeta = ({ state }) => {
    return (
        <>
            <Head>
                <meta name="description" content={state.frontity.description} />
                <html lang="en" />  
            </Head>
            <BootstrapStyles />
        </>
    )
}

export default connect(HeadMeta)