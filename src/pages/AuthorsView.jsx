import { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import AuthorBooks from '../components/AuthorBooks';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'http://localhost:3000/authors?_embed=books',
    );

    this.setState({ authors: response.data });
  }
  render() {
    const { authors } = this.state;
    return (
      <div>
        <h1>This is authors</h1>
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${this.props.match.url}/${author.id}`}>
                {author.name}
              </NavLink>
              {/* <NavLink to="/authors/:authorId">{author.name}</NavLink> */}
            </li>
          ))}
        </ul>

        {/* <Route
          // path="/authors/:authorId"
          // render={() => <h1>Books of current author</h1>}
          // or
          // path={`${this.props.match.path}/:authorId`}
          // component={AuthorBooks} // possibly do one more fetch in AuthorBooks comp.
          // or // v. 0 --- all authors >>> in AuthorBooks.jsx
          // path={`${this.props.match.path}/:authorId`}
          // render={props => {
          //   return <AuthorBooks {...props} authors={this.state.authors} />;
          // }}
        /> */}

        <Route
          path={`${this.props.match.path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId);

            const author = this.state.authors.find(
              author => author.id === bookId,
            );

            return author ? (
              <AuthorBooks {...props} books={author.books} />
            ) : null;
          }}
        />
      </div>
    );
  }
}

export default AuthorsView;
