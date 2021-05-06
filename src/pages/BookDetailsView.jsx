import React, { Component } from 'react';
import axios from 'axios';

class BookDetailsView extends Component {
  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
    author: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const response = await axios(
      `http://localhost:3000/books/${bookId}?_expand=author`,
    );

    // this.setState({ book: response.data }); // we have {book} in the state
    this.setState({ ...response.data }); // we spread all information to the state
  }

  render() {
    return (
      <div>
        <h1>This is a one book page </h1>
        <p>
          <strong>Book {this.props.match.params.bookId}</strong>
        </p>
        <img src={this.state.imgUrl} alt="" />
        <h2>{this.state.title}</h2>
        {this.state.author && <p>Author: {this.state.author.name}</p>}
        <p>Genre: {this.state.genre}</p>
        <p>{this.state.descr}</p>
      </div>
    );
  }
}

export default BookDetailsView;
