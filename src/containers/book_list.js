import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li className="list-group-item" key={book.title}>{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
    return {
      books: state.books
    };
}

function mapDispachToProps(dispach) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispach);
}

export default connect(mapStateToProps)(BookList);
