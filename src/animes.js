import React from 'react'

const Animes = (props) => {
    const anime = props.results.map(r => (
        <li key={r.id}>
            {r.attributes.canonicalTitle}
        </li>))
    return (
        <>
            <ul>{anime}</ul>
        </>)
}

export default Animes