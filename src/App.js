import { useState, useEffect } from 'react';

import NewBook from './components/NewBook';
import BookList from './components/BookList';
import styles from './App.module.css';


function App() {

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addBookHandler = book => {
    setBooks(prevState => [...prevState, book]);
  }

  const fetchBooksHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
          const response = await fetch('https://dummy-api-c9a0e-default-rtdb.firebaseio.com/books.json');
          
          if (!response.ok) {
            throw new Error('Could not fetch data!');
          }

          const data = await response.json();
          console.log(data);

          let loadedBooks = [];

          for (const key in data)
          {
            loadedBooks.push({id: key, title: data[key].title, author: data[key].author});
          }

          setBooks(loadedBooks);

        } catch (err) {
          setError({
            message: err.message || 'Something went wrong',
            present: true
          })
        }
        setIsLoading(false);
  }

  useEffect(() => {
    fetchBooksHandler();
  },[]);
  return (
    <div className={styles.App}>
      <NewBook onAddBook={addBookHandler} />
      <BookList books={books} onFetchBooks={fetchBooksHandler} loading = {isLoading}/>
    </div>
  );
}

export default App;
