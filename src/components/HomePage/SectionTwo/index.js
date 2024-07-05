import React from 'react'

import './index.scss'

const SectionTwo = () => {
  return (
    <div className='sectionTwo'>
      <div className='title'>
        <span>Trending Properties</span>
      </div>
      <div className='cards-container'>
        <div className='cards'>
          <div className='card'>
            <img src='https://images.unsplash.com/photo-1616910111011-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='card' />
            <div className='card-info'>
              <div className='card-title'>
                <span className='card-price'>$100,000</span>
              </div>
              <div className='card-description'>
                <span className='card-description-text'></span>
              </div>
            </div>
          </div>
          <div className='card'>
            <img src='https://images.unsplash.com/photo-1616910111011-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='card' />
            <div className='card-info'>
              <div className='card-title'>
                <span className='card-price'>$100,000</span>
              </div>
              <div className='card-description'>
                <span className='card-description-text'></span>
              </div>
            </div>
          </div>
          <div className='card'>
            <img src='https://images.unsplash.com/photo-1616910111011-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='card' />
            <div className='card-info'>
              <div className='card-title'>
                <span className='card-price'>$100,000</span>
              </div>
              <div className='card-description'>
                <span className='card-description-text'></span>
              </div>
            </div>
          </div>
          <div className='card'>
            <img src='https://images.unsplash.com/photo-1616910111011-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='card' />
            <div className='card-info'>
              <div className='card-title'>
                <span className='card-price'>$100,000</span>
              </div>
              <div className='card-description'>
                <span className='card-description-text'></span>
              </div>
            </div>
          </div>
        </div>
        <div className='pagination'><span>Trending Properties</span></div>
      </div>
    </div>
  )
}

export default SectionTwo