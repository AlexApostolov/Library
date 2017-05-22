// "selectBook" action creator takes a book object with its title
// it needs to return an action--object with a type property
export function selectBook(book) {
  return {
    // NOTE: better to avoid magic strings
    type: 'BOOK_SELECTED',
    payload: book
  };
}
