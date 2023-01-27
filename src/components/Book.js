import React from 'react';

const Book = (props) => {
    return (
        <React.Fragment>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
        </React.Fragment>
    );
}

export default Book;