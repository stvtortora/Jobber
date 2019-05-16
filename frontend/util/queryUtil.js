import merge from 'lodash/merge'

const defaultOptions = {
  limit: 10,
  offset: 1,
  order: 'created_at:desc'
}

export const buildQuery = (queryOptions) => {
  const options = merge({}, defaultOptions, queryOptions)
  let query = '?'

  Object.keys(options).forEach(key => {
    if (query.length > 1) {
      query += '&'
    }

    const optionType = key.split(' ').join('_')
    let optionVal

    if (['limit', 'offset'].includes(optionType)) {
      optionVal = options[key]
    }  else if (optionType === 'order'){
      optionVal = options[key].split(' ').join(':')
    } else {
      optionVal = options[key].split(' ').join('_')
    }

    query += `${optionType}=${optionVal}`
  })

  return query
}

export const parseQuery = query => {
  if (!query.length) return {};
  return query.slice(2).split('&').reduce((parsedQuery, filter) => {
    const filterParts = filter.split('=')
    const filterKey = filterParts[0]

    let filterValue;
    if (['limit', 'offset'].includes(filterKey)) {
      filterValue = Number(filterParts[1])
    } else if (filterKey === 'order') {
      filterValue = filterParts[1].split(':').join(' ')
    } else {
      filterValue = filterParts[1].split('_').join(' ')
    }

    parsedQuery[filterKey] = filterValue
    return parsedQuery
  }, {})
}
