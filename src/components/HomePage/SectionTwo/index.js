import React from 'react'

import './index.scss'

const cardImage = require('../../../assets/HouseOne 1.png')

// SectionTwo component
const SectionTwo = () => {
  return (
    <div className='sectionTwo'>
      <div className='title'>
        <span>Trending Properties</span>
      </div>
      <div className="card-container">
        <div className="card">
            <div className="card-image">
              <img src={cardImage} alt="A beautiful house with a garden and a pool." />
            </div>
            <div className="card-content">
              <h2 className="card-title">Card Title</h2>
              <p className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt arcu vel arcu fermentum, eget accumsan tincidunt.
              </p>
            </div>
          </div>
        <div className="card">
          <div className="card-content">
            {/* Add your card content here */}
            <h2>Card Title</h2>
            <p>Card description goes here.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            {/* Add your card content here */}
            <h2>Card Title</h2>
            <p>Card description goes here.</p>
          </div>
        </div>
        <div className="card">
        <div className="card-image">
          <img src={cardImage} alt="Card Image" />
        </div>
        <div className="card-content">
          <h2 className="card-title">Card Title</h2>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt arcu vel arcu fermentum, eget accumsan tincidunt.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo