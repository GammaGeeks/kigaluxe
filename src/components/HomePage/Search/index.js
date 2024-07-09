/* eslint-disable no-unused-vars */
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAfrica, faHouse, faDollarSign, faLandmarkAlt, faBed, faBath, faSearch } from '@fortawesome/free-solid-svg-icons'


import './index.scss'

function Search() {
  return (
    <Row className='search-homepage'>
      <form>
        <div className='row buttons'>
          <Col>
            <span>
              <FontAwesomeIcon className='icon-input' icon={faEarthAfrica} size='lg'/>
              <label for='location'>Location</label>
            </span>
            <input type='text' id='location' name='location' placeholder="Choose location"/>
          </Col>
          <Col>
            <span>
              <FontAwesomeIcon className='icon-select' icon={faHouse} size='lg'/>
              <label for='propertyType'>Property Type</label>
            </span>
            <select id='propertyType' name='propertyType'>
              <option value=''>Any</option>
              <option value='house'>House</option>
              <option value='apartment'>Apartment</option>
              <option value='duplex'>Duplex</option>
            </select>
          </Col>
          <Col>
            <span>
              <FontAwesomeIcon className='icon-select' icon={faDollarSign} size='lg'/>
              <label for='priceRange'>Price Range</label>
            </span>
            <select id='priceRange' name='priceRange'>
              <option value=''>Any</option>
              <option value='100000-300000'>$100,000 - $300,000</option>
              <option value='300000-500000'>$300,000 - $500,000</option>
              <option value='500000-700000'>$500,000 - $700,000</option>
              <option value='700000+'>$700,000+</option>
            </select>
          </Col>
          <Col>
            <span>
              <FontAwesomeIcon className='icon-select' icon={faLandmarkAlt} size='lg'/>
              <label for='propertyType'>Property Size</label>
            </span>
            <select id='propertySize' name='propertySize'>
              <option value=''>Any</option>
              <option value='1000-3000'>1000 - 3000 sqm</option>
              <option value='3000-5000'>3000 - 5000 sqm</option>
              <option value='5000-7000'>5000 - 7000 sqm</option>
              <option value='7000+'>7000+</option>
            </select>
          </Col>
          <Col>
            <button type='submit'>
              <FontAwesomeIcon icon={faSearch} size='2x' />
            </button>
          </Col>
        </div>
      </form>
    </Row>
  )
}

export default Search