import React from 'react'
import FormField from './formField'

export default ({ fields, formState, update, relatedRecords}) => (
  <span className='field-row'>
  {
    fields.map(field => {
      return (
        <FormField
        key={field}
        fieldName={field}
        formState={formState}
        update={update}
        relatedRecords={relatedRecords}
        />
      )
    })
  }
  </span>
)
