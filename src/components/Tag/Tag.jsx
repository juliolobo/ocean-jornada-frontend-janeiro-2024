import { useState } from "react"

function Tag(props) {
    const tags = props
    return (
        <>
        {tags.tag.map((tag, i) => <div className="tag" key={i}>{tag}</div>)}
        </>
    )
}

export default Tag