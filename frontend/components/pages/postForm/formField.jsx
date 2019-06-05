import React from 'react'

const textPlaceHolders = {
  'city': 'e.g New York', 'website': 'e.g www.compnaywebsite.com', 'linked_in': 'e.g linkedin.com/username', 'twitter': 'Enter your Twitter url...', 'phone_number': 'xxxxxxxxxx', 'tagline': 'e.g We get it done!', 'facebook': 'Enter your facebook url...'
}

const optionalFields = {
  'linked_in': true, 'twitter': true, 'team_size': true, 'industry': true, 'facebook': true,
  'salary': true, 'career_level': true, 'qualification': true, 'language': true, 'experience': true
}

const optionsMap = {
  'job_type': ['Full Time', 'Part Time', 'Contract', 'Internship'],
  'salary': ['$20000-$30000', '$30000-$40000','$40000-$50000','$50000-$60000','$60000-$70000','$70000-$80000','$80000-$90000','$90000-$100000','$100000-$1100000', '$110000-$1200000','$120000-$1300000','$130000-$1400000','$140000-$1500000','$150000-$1600000','$160000-$1700000','$170000-$1800000','$180000-$1900000','$190000-$2000000','$200000+'],
  'career_level': ['Junior', 'Mid', 'Senior', 'Lead', 'Assistant Manager', 'Manager', 'Department Head', 'Executive'],
  'industry': ['Ad Tech', 'Agriculture', 'Arts', 'FinTech', 'eCommerce', 'Digital Media', 'Sales', 'Software', 'GreenTech', 'Payments', 'Professional Services', 'Machine Learning'],
  'qualification': ['Associate Degree', 'Bachelor Degree', 'Master Degree', 'Doctorate Degree'],
  'experience': ['0-2 Years', '2-3 Years', '3-5 Years', '6-7 Years', '8-9 Years', '9-10 Years', '10+ Years'],
  'language': ['Arabic', 'English', 'Spanish', 'Mandarin', 'French', 'Portuguese', 'Hindi'],
  'team_size': ['<10', '10-25', '25-50', '50-100', '100-200', '200-300', '300-500', '500+']
}

export default ({ fieldName, formState, update, relatedRecords }) => {
  const associatedOptions = () => {
    return relatedRecords[fieldName].ids.map(recordId => {
      const record = relatedRecords[fieldName].info[recordId]
      const title = `${record.name ? record.name : record.title}`
      return <option key={record.id} selected={formState[fieldName] === record.id} value={record.id}>{title}</option>
    })
  }

  const ownOptions = () => {
    return optionsMap[fieldName].map(option => {
      return <option key={option} selected={formState[fieldName]=== option} value={option}>{option}</option>
    })
  }

  const options = () => {
    return fieldName.split('_').includes('id') ?
    associatedOptions() :
    ownOptions()
  }

  const displayTitle = `${fieldName.split('_id').join('').split('_').join(' ')}`

  return (
    <div key={fieldName} className='non-title-field form-field'>
      <label>{`${displayTitle}${optionalFields[fieldName] ? ' (optional)' : ''}`}</label>
      {
        Object.keys(textPlaceHolders).includes(fieldName) ?
        <input id={fieldName === 'city' ? 'loc-input' : 'input'} placeholder={textPlaceHolders[fieldName]} type='text' value={formState[fieldName]} onChange={update(fieldName)}/> :
        <select onChange={update(fieldName)}>
          <option value=''>{`Choose ${['a','e','i','o','u'].includes(displayTitle[0]) ? 'an' : 'a'} ${displayTitle}...`}</option>
          { options(fieldName) }
        </select>
      }
    </div>
  )
}
