import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Card, Button } from 'react-bootstrap'

import './index.scss'

const HomeCard = () => {
  return (
    <Card>
      <Card.Img
        src={require('../../../../assets/HouseOne 1.png')}
        style={{
          objectFit: 'cover',
        }}
      />
      <Card.Body
        style={{ width: '60%' }}
      >
        <Card.Title>House for sale in Kigali</Card.Title>
        <Card.Text>
          <span><FontAwesomeIcon icon={faLocationDot} /> Kigali City, Gasabo, Kimihurura</span>
          <p>Published on 12 June | Expires on 12 July</p>
          <p><b>Details:</b> 4 bedrooms, 2 bathrooms</p>
          <div className="badges">
            <span className='type'>For Sale</span>
            <span className='price'><b>Price:</b> $200,000</span>
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