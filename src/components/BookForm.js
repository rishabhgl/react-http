import React, {useRef} from "react";

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './BookForm.module.css';

const BookForm = (props) => {

    const titleInputRef = useRef();
    const authorInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        props.onPostBook({
            title: titleInputRef.current.value,
            author: authorInputRef.current.value
        })
    }

    const buttonContent = props.loading ? 'Loading': 'Add Book'; 
    return (<Card className = {styles.bookForm}>
        <form onSubmit={submitHandler}>
            <div className={styles['input-fields']}>
                <div className={styles['input-field']}>
                    <label htmlFor="title"> Title </label>
                    <input ref = {titleInputRef} type="text" />
                </div>
                <div className={styles['input-field']}>
                    <label htmlFor="author"> Author </label>
                    <input ref = {authorInputRef} type="text" />
                </div>
            </div>
            <div className={styles.action}>
                <Button type = "submit" disabled = {props.loading}> {buttonContent} </Button>
            </div>
        </form>
    </Card>);
}

export default BookForm;