import React from 'react'

import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const SectionTwo = () => {
  return (
    <div className='sectionTwo'>
      <div className='title'>
        <span>Trending Properties</span>
      </div>
      <div className="card-container">
        <div className="card">
          <div className='card-image'>
            <img src={require('../../../assets/HouseOne 1.png')} alt='' />
          </div>
          <div className='card-details'>
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
        </div>
        <div className="card">
          <div className='card-image'>
            <img src={require('../../../assets/HouseOne 1.png')} alt='' />
          </div>
          <div className='card-details'>
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
        </div>
        
        <div className="card">
          <div className='card-image'>
            <img src={require('../../../assets/HouseOne 1.png')} alt='' />
          </div>
          <div className='card-details'>
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
        </div>
        
        <div className="card">
          <div className='card-image'>
            <img src={require('../../../assets/HouseOne 1.png')} alt='' />
          </div>
          <div className='card-details'>
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
        </div>
      </div>

    </div>
  )
}

export default SectionTwo
