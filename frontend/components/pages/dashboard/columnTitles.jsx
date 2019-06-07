import React from 'react'

export default ({ fields }) => {
  return (
    <div className='manager-columns'>
      {
        fields.map(field => {
          return <div key={field} className='manager-column'>{field.split('_').join(' ')}</div>
        })
      }
    </div>
  )
}
