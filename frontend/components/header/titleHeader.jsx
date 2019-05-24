import React from 'react'

export default ({ message, additionalData }) => (
  <div className='title-header-container'>
    <div className='title-header-inner'>
      <span className='title-header'>{message}</span>
      {
        additionalData && additionalData.useData ?
        <div className='additional-data'>
          <p>{additionalData.message}</p>
          <button onClick={additionalData.buttonAction}>{additionalData.buttonText}</button>
        </div>
        :
        <div/>
      }
    </div>
  </div>
)
