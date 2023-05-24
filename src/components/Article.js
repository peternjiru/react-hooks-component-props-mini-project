import React from "react";

function Article({ title, date = "January 1, 1970",duration, preview }) {

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} . {duration}</small>
            <p>{preview}</p>
        </article>

    );

}

export default Article;