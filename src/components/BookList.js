
import Card from '../UI/Card';
import Button from '../UI/Button';
import Book from './Book';

const BookList = (props) => {

    const clickHandler = () => {
        props.onFetchBooks();
    }

    let content = <h2>No books available at the moment!</h2>

    if (props.books.length > 0)
    {
        content =   props.books.map(book => <Book title={book.title} author = {book.author} key = {book.id}/>)
    }

    if(props.loading)
    {
        content = <h2> Loading... </h2>
    }
    return ( <Card>
        { content }
        <Button onClick = {clickHandler}>Fetch Books</Button>
    </Card> );
}
 
export default BookList;