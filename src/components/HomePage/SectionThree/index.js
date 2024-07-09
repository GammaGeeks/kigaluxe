/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import './index.scss'

function SectionThree() {
  return (
    <div className='sectionThree'>
      <div className='wrapper'>
        <div className='title'>
          <span>We are available in the whole parts of Rwanda</span>
        </div>

        <div className='card-container'>
          <div className="card">
            <img src={require('../../../assets/location_one.png')} alt='Image one' />
          </div>
          <div className="card">
          <img src={require('../../../assets/location_two.png')} alt='Image two' />
          </div>
          <div className="card">
            <img src={require('../../../assets/location_three.png')} alt='Image three' />
          </div>
          <div className="card">
            <img src={require('../../../assets/location_four.png')} alt='Image four' />
          </div>
          <div className="card">
            <img src={require('../../../assets/location_four.png')} alt='Image five' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree