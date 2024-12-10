import Card from 'react-bootstrap/Card'


function BookCard({ book }) {
 
  return (
    <>
      <Card className="book-card">
    <Card.Body className="card-text"><Card.Title> <span>{book.volumeInfo.title}</span></Card.Title>
    <Card.Text>{book.volumeInfo.authors ? <p>By: {book.volumeInfo.authors[0]}</p> : null}</Card.Text>
    {book.volumeInfo.imageLinks ? (<img src={book.volumeInfo.imageLinks.smallThumbnail}></img>) : null}
    </Card.Body>
    </Card>
    </>
  )
}

export default BookCard;
