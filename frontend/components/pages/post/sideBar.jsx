import React from 'react'

const icons = {
  'salary': 'money',
  'career_level': 'bar-chart',
  'experience': 'sliders',
  'qualification': 'graduation-cap',
  'industry': 'industry'
}

export default ({ postType, post, overViewKeys, buttonContent, updateRoute }) => {
  return (
    <section className='side-bar-container'>
      <div className='post-button'>
        <p onClick={buttonContent.redirectRoute ? () => updateRoute(buttonContent.redirectRoute) : () => null}>{buttonContent.message}</p>
      </div>
      <div className='info-bar'>
        <p className='info-bar-title'>{`${postType} Information`}</p>
        <ul>
          {
            overViewKeys.filter(key => post[key]).map(key => {
              return (
                <li key={key} className='info-bar-item'>
                  <i className={`fa fa-${icons[key]}`} aria-hidden="true"></i>
                  <div>
                    <p className='info-type'>{key.split('_').join(' ')}</p>
                    <p className='info-value'>{post[key]}</p>
                  </div>

                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
