import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Card, Button } from 'react-bootstrap'

import './index.scss'

const HomeCard = ({property}) => {
  // console.log(property);
  const {imageUrls, title, price, property_type, isForSale, isForRent, location, bedrooms, bathrooms, createdAt} = property
  return (
    <Card>
      <Card.Img
        src={imageUrls[0]}
        style={{
          objectFit: 'cover',
        }}
        className='img-fluid'
      />
      <Card.Body
        style={{ width: '60%' }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span><FontAwesomeIcon icon={faLocationDot} /> {location}</span>
          <p>Published on {moment(createdAt).format('Do MMMM')}</p>
          <p><b>Details:</b> {bedrooms} bedrooms, {bathrooms} bathrooms</p>
          <p><b>Type:</b> {property_type}</p>
          <div className="badges">
            {
              isForSale ? <span className='type'>For Sale</span> : ''
            }
            {
              isForRent ? <span className='type'>For Rent</span> : ''
            }
            <span className='price'><b>Price:</b> RWF {price}</span>
          </div>
          <Button variant="primary">More Details <span>
              <FontAwesomeIcon
                icon={faCaretRight}
                color='white'
              />
            </span>
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default HomeCard