import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './pages/HomeView';
import AuthorsView from './pages/AuthorsView';
import BooksView from './pages/BooksView';
import BookDetailsView from './pages/BookDetailsView';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/authors"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Authors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Books
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/authors" component={AuthorsView} />
        <Route path="/books/:bookId" component={BookDetailsView} />
        <Route path="/books" component={BooksView} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
