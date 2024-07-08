import React from 'react'

import './index.scss'

const SectionTwo = () => {
  return (
    <div className='sectionTwo'>
      <div className='title'>
        <span>Trending Properties</span>
      </div>
      <div class="card-container">
        <div class="card">
          <h3>Card 1</h3>
          <p>This is the content of card 1.</p>
        </div>
        <div class="card">
          <h3>Card 2</h3>
          <p>This is the content of card 2.</p>
        </div>
        <div class="card">
          <h3>Card 3</h3>
          <p>This is the content of card 3.</p>
        </div>
        <div class="card">
          <h3>Card 4</h3>
          <p>This is the content of card 4.</p>
        </div>
      </div>

    </div>
  )
}

export default SectionTwo