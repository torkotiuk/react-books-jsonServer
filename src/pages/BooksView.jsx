import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await axios.get('http://localhost:3000/books');

    this.setState({ books: response.data });
  }
  render() {
    const { books } = this.state;
    // console.log(this.props);
    // console.log(this.props.match.url); //using for navigation, how current rout match pathname
    const matchUrl = this.props.match.url;
    return (
      <div>
        <h1>This is books</h1>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              {/* <Link to={`/books/${book.id}`}>{book.title}</Link> */}
              <Link to={`${matchUrl}/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BooksView;
