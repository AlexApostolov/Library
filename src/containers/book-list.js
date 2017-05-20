import React, {Component} from 'react';
import {Col, ListGroup, ListGroupItem} from 'react-bootstrap';
// import a property from react-redux to make BookList a container
import {connect} from 'react-redux';
// import action creator "selectBook"
import {selectBook} from '../actions/index';
// function that makes sure action generated by action creator flows through all the different reducers
import {bindActionCreators} from 'redux';

// No need to export this component because it will be exported as a container at bottom
class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <ListGroupItem key={book.title} onClick={() => this.props.selectBook(book)}>
          {book.title}
        </ListGroupItem>
      );
    });
  }

  render() {
    return (
      <Col sm={4}>
        <ListGroup>
          {this.renderList()}
        </ListGroup>
      </Col>
    );
  }
}

// Pass application state: array of books and active book
function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// Pass the result to all of the reducers whenever "selectBook" is called
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Take this component and return as a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);