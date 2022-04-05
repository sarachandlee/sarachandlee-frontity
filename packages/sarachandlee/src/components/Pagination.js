import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link"

const Pagination = ({state, actions}) => {
    const {next, previous} = state.source.get(state.router.link)

    // Pre-fetch the the next page if it hasn't been fetched yet.
    useEffect(() => {
        if (next) actions.source.fetch(next);
    }, [])

    return (
        <>
            {previous && (
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        actions.router.set(previous)
                    }}
                    >
                    &#171; Prev
                </button>  
            )}
            {next && (
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        actions.router.set(next)
                    }}
                    >
                    Next &#187;
                </button> 
            )}
        </>

    )

}

export default connect(Pagination)
