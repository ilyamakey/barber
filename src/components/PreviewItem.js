import React from 'react';

function PreviewItem(props) {

    return(
        <section className="preview__item">
            <h2 className="preview__item__heading">{props.heading}</h2>
            <div className="preview__item__content">{props.content}</div>
        </section>
    )
}

export default PreviewItem;