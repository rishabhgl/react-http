import { useState } from 'react';

import BookForm from './BookForm';
import styles from './NewBook.module.css';

const NewBook = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function onPostBookHandler(book) {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://dummy-api-c9a0e-default-rtdb.firebaseio.com/books.json', {
                method: 'POST',
                body: JSON.stringify(book),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            // console.log(response);
            if (!response.ok) {
                throw new Error('Could not fetch data!');
            }
            const data = await response.json();
            props.onAddBook({ id: data.name, title: book.title, author: book.author });
        } catch (err) {
            setError({
                message: err.message || 'Something went wrong!',
                present:true
            });
        }
        setIsLoading(false);

    }
    return (
        <>
            <BookForm onPostBook={onPostBookHandler} loading={isLoading} />
            {error && <p className={styles['error-text']}>{error.message}</p>}
        </>
    );
}

export default NewBook;