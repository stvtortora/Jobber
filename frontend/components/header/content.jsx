import React from 'react'


export default () => {
  const sectionHeader =  () => {
    return (
      <div className='home-section-header'>
        <h3>The Easiest Way To Get Your New Job</h3>
        <span>Find Full Time, Part Time, or Freelance Opportunities</span>
      </div>
    )
  }

  const searchBox = () => {
    return (
      <section className='home-search-box'>
        <form>
          <div className='search-keywords'>
            <input id='keyword-input' placeholder='Job title, keyword, or company name'></input>
            <i className="fa fa-keyboard-o"></i>
          </div>
          <div className='search-location'>
            <input id='location-input' placeholder='Choose your city'></input>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </div>
          <div className='search-submit'>
            <button><i className="fa fa-search" aria-hidden="true"></i></button>
          </div>
        </form>
      </section>
    )
  }

  return (
    <content className='content'>
      <div className='home-page-content'>
          {sectionHeader()}
          {searchBox()}
        </div>
    </content>
  )
}
