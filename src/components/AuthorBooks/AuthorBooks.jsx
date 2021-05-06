import React from 'react';
import { Link } from 'react-router-dom';

const AuthorBooks = ({ books }) => {
  return (
    <div>
      <h2>Author books component</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}> {book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AuthorBooks;

// v. 1 - list of author books by clicking on an author
// import React from 'react';
// const AuthorBooks = ({ books }) => {
//   return (
//     <div>
//       <h2>Author books component</h2>
//       <ul>
//         {books.map(book => (
//           <li key={book.id}>{book.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default AuthorBooks;

// v. 0 --- all authors
// import React, { Component } from 'react';
// class AuthorBooks extends Component {
//   state = {
//     books: [],
//   };
//   componentDidMount() {
//     const id = Number(this.props.match.params.authorId);
//     const author = this.props.authors.find(author => author.id === id);
//     this.setState({ books: author.books });
//   }
//   componentDidUpdate() {}
//   render() {
//     return (
//       <div>
//         <h2>Author books component</h2>
//         <ul>
//           {this.state.books.map(book => (
//             <li key={book.id}>{book.title}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
// export default AuthorBooks;
