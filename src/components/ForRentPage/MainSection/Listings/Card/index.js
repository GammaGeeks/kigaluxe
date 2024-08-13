import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardProperty() {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className='mt-4'>
      {/* <Card>
        <Card.Img variant="top" src={require('../../../../../assets/HouseOne 1.png')} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      <div className="card" style={{width: '100%', borderRadius: '5px'}}>
        <img style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} src={require('../../../../../assets/HouseOne 1.png')} className="card-img-top" alt="image_property" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link href="/" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    </Col>
  )
}

export default CardProperty