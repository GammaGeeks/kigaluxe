import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import './index.scss'
import FormInput from '../../../Form/FormInput'
// import Form
import location2SVG from '../../../../assets/svg/card/location_2.svg'
import homeSVG from '../../../../assets/svg/card/home.svg'
import dollarSVG from '../../../../assets/svg/card/dollar_sign.svg'
import resizeSVG from '../../../../assets/svg/card/resize.svg'


function Search() {
  return (
    <Col className='mt-4 property_search'>
      <div className='d-flex flex-column px-3'>
        <div className='d-flex'>
          <h4 className='search_title_2'>Advanced Search</h4>
        </div>
        <Row className='d-flex justify-content-around align-content-center px-2'>
          <Col className='d-flex flex-column justify-content-center'>
            <span><Image src={location2SVG} /><span className='form_title'>Location</span></span>
            <FormInput
              name="location"
              label="Location"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.code}
            />
          </Col>
          <Col className='d-flex flex-column justify-content-center'>
            <span><Image src={homeSVG} /><span className='form_title'>Property Type</span></span>
            <FormInput
              name="property_type"
              label="Property type"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.code}
            />
          </Col>
          <Col className='d-flex flex-column justify-content-center'>
            <span><Image src={dollarSVG} /><span className='form_title'>Price Range</span></span>
            <FormInput
              name="price_range"
              label="Price Range"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.code}
            />
          </Col>
          <Col className='d-flex flex-column justify-content-center'>
            <span><Image src={resizeSVG} /><span className='form_title'>Property Size</span></span>
            <FormInput
              name="location"
              label="Property Size"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.code}
            />
          </Col>
        </Row>
        <div className='d-flex'>
          <h4 className='search_title_2'>Would you like more filter?</h4>
        </div>
      </div>
    </Col>
  )
}

export default Search