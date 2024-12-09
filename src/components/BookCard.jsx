import Card from 'react-bootstrap/Card'

function BookCard({ book }) {
 
  return (
    <>
      <Card>
    <Card.Body><Card.Title>{book.volumeInfo.title}</Card.Title>
    <Card.Text>{book.volumeInfo.authors ? <p>By: {book.volumeInfo.authors[0]}</p> : null}</Card.Text>
    {book.volumeInfo.imageLinks ? (<img src={book.volumeInfo.imageLinks.smallThumbnail}></img>) : null}
    </Card.Body>
    </Card>
    </>
  )
}

export default BookCard;
