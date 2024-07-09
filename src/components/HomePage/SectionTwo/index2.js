import React from 'react'

import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Col, Card, CardBody } from 'reactstrap'

const SectionTwo = () => {
  return (
    <div className='row sectionTwo'>
      <div className='col-lg-12 title'>
        <h2 className='text-center'>Trending Properties</h2>
      </div>
      <div className="row card-container">
        <Col>
          <Card className='row'>
            <Col xs="1" sm="1" md="4" className='card-image'>
              <img src={require('../../../assets/HouseOne 1.png')} alt='' />
            </Col>
            <Col xs="1" sm="1" md="8" className='card-details'>
              <CardBody>
                <h3>House for sale in Kigali</h3>
                <span><FontAwesomeIcon icon={faLocationDot} /> Kigali City, Gasabo, Kimihurura</span>
                <p>Published on 12 June | Expires on 12 July</p>
                <p><b>Details:</b> 4 bedrooms, 2 bathrooms</p>
                <div className="badges">
                  <span className='type'>For Sale</span>
                  <span className='price'><b>Price:</b> $200,000</span>
                </div>
                <button>View Property</button>
              </CardBody>
              
            </Col>
          </Card>
        </Col>
        <Col>
          <Card>
            
          </Card>
        </Col>
        {/* <Col xs="1" sm="1" md="6" lg="6" className="card cards">
          <Col xs="1" sm="1" md="4" className='card-image'>
            <img src={require('../../../assets/HouseOne 1.png')} alt='' />
          </Col>
          <Col xs="1" sm="1" md="8" className='card-details'>
            <h3>House for sale in Kigali</h3>
            <span><FontAwesomeIcon icon={faLocationDot} /> Kigali City, Gasabo, Kimihurura</span>
            <p>Published on 12 June | Expires on 12 July</p>
            <p><b>Details:</b> 4 bedrooms, 2 bathrooms</p>
            <div className="badges">
              <span className='type'>For Sale</span>
              <span className='price'><b>Price:</b> $200,000</span>
            </div>
            <button>View Property</button>
          </Col>
        </Col>
        <Card className="row col-6 cards">
          <div className='col-4 card-image'>
            <img src={require('../../../assets/HouseOne 1.png')} alt='' />
          </div>
          <div className='col-8 card-details'>
            <h3>House for sale in Kigali</h3>
            <span><FontAwesomeIcon icon={faLocationDot} /> Kigali City, Gasabo, Kimihurura</span>
            <p>Published on 12 June | Expires on 12 July</p>
            <p><b>Details:</b> 4 bedrooms, 2 bathrooms</p>
            <div className="badges">
              <span className='type'>For Sale</span>
              <span className='price'><b>Price:</b> $200,000</span>
            </div>
            <button>View Property</button>
          </div>
        </Card>
        <Card className="row col-6 cards">
          <div className='col-4 card-image'>
            <img src={require('../../../assets/HouseOne 1.png')} alt='' />
          </div>
          <div className='col-8 card-details'>
            <h3>House for sale in Kigali</h3>
            <span><FontAwesomeIcon icon={faLocationDot} /> Kigali City, Gasabo, Kimihurura</span>
            <p>Published on 12 June | Expires on 12 July</p>
            <p><b>Details:</b> 4 bedrooms, 2 bathrooms</p>
            <div className="badges">
              <span className='type'>For Sale</span>
              <span className='price'><b>Price:</b> $200,000</span>
            </div>
            <button>View Property</button>
          </div>
        </Card>
        <Card className="row col-6 cards">
          <div className='col-4 card-image'>
            <img src={require('../../../assets/HouseOne 1.png')} alt='' />
          </div>
          <div className='col-8 card-details'>
            <h3>House for sale in Kigali</h3>
            <span><FontAwesomeIcon icon={faLocationDot} /> Kigali City, Gasabo, Kimihurura</span>
            <p>Published on 12 June | Expires on 12 July</p>
            <p><b>Details:</b> 4 bedrooms, 2 bathrooms</p>
            <div className="badges">
              <span className='type'>For Sale</span>
              <span className='price'><b>Price:</b> $200,000</span>
            </div>
            <button>View Property</button>
          </div>
        </Card> */}
      </div>

    </div>
  )
}

export default SectionTwo
