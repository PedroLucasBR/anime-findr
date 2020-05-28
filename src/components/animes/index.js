import React from 'react';

import "./style.css";

const Animes = (props) => {
    const anime = props.results.map(r => (
        r.attributes));

    return (
        <>
            <ul className="anime-list">
                {anime.map(r => (
                    <li key={r._id}>
                        <header style={{ backgroundImage: `url(${r.posterImage.tiny})` }} />
                        <strong>{r.canonicalTitle}</strong>
                        <span>{r.titles.ja_jp}</span>
                    </li>
                ))}
            </ul>
        </>)
}

export default Animes