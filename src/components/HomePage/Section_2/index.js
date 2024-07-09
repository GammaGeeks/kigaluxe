/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Stack, Row, Col, Card } from 'react-bootstrap'

const SectionTwo = () => {
  return (
    <Row className='sectionTwo'>
      <div className='row title'>
        <h2 className='text-center'>Trending Properties</h2>
      </div>
      <div className="row card-container">
        <Col md={6}>
          <Card>
            <Stack direction="horizontal" gap={3}>
              <Col className="image">
                <img src={require('../../../assets/HouseOne 1.png')} alt="Card Image" />
              </Col>
              <Col className="content">
                <h2>House for sale in Kigali</h2>
                <span><FontAwesomeIcon icon={faLocationDot} /> Kigali City, Gasabo, Kimihurura</span>
                <p>Published on 12 June | Expires on 12 July</p>
                <p><b>Details:</b> 4 bedrooms, 2 bathrooms</p>
                <div className="badges">
                  <span className='type'>For Sale</span>
                  <span className='price'><b>Price:</b> $200,000</span>
                </div>
                <button>View Property</button>
              </Col>
            </Stack>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Stack direction="horizontal" gap={3}>
              <Col className="image">
                <img src={require('../../../assets/HouseOne 1.png')} alt="Card Image" />
              </Col>
              <Col className="content">
                <h2>House for sale in Kigali</h2>
                <span><FontAwesomeIcon icon={faLocationDot} /> Kigali City, Gasabo, Kimihurura</span>
                <p>Published on 12 June | Expires on 12 July</p>
                <p><b>Details:</b> 4 bedrooms, 2 bathrooms</p>
                <div className="badges">
                  <span className='type'>For Sale</span>
                  <span className='price'><b>Price:</b> $200,000</span>
                </div>
                <button>View Property</button>
              </Col>
            </Stack>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Stack direction="horizontal" gap={3}>
              <Col className="image">
                <img src={require('../../../assets/HouseOne 1.png')} alt="Card Image" />
              </Col>
              <Col className="content">
                <h2>House for sale in Kigali</h2>
                <span><FontAwesomeIcon icon={faLocationDot} /> Kigali City, Gasabo, Kimihurura</span>
                <p>Published on 12 June | Expires on 12 July</p>
                <p><b>Details:</b> 4 bedrooms, 2 bathrooms</p>
                <div className="badges">
                  <span className='type'>For Sale</span>
                  <span className='price'><b>Price:</b> $200,000</span>
                </div>
                <button>View Property</button>
              </Col>
            </Stack>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Stack direction="horizontal">
              <Col className="image">
                <img src={require('../../../assets/HouseOne 1.png')} alt="Card Image" />
              </Col>
              <Col className="content">
                <h2>House for sale in Kigali</h2>
                <span><FontAwesomeIcon icon={faLocationDot} /> Kigali City, Gasabo, Kimihurura</span>
                <p>Published on 12 June | Expires on 12 July</p>
                <p><b>Details:</b> 4 bedrooms, 2 bathrooms</p>
                <div className="badges">
                  <span className='type'>For Sale</span>
                  <span className='price'><b>Price:</b> $200,000</span>
                </div>
                <button>View Property</button>
              </Col>
            </Stack>
          </Card>
        </Col>
        {/* <Col md={6}>
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
        </Col> */}
      </div>
    </Row>
  )
}

export default SectionTwo
