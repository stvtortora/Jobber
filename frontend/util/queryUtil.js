import merge from 'lodash/merge'

const defaultOptions = {
  limit: 10,
  offset: 1,
  order: 'created_at:desc'
}

// export const seelectedOptionByType = (dataType) => {
//   const existingQuery = queryParts.filter(queryPart => {
//     return queryPart.split('=')[0] === dataType
//   })
//   return existingQuery.length ? existingQuery[0] : null
// }

export const buildQuery = (queryOptions) => {
  const options = merge({}, defaultOptions, queryOptions)
  let query = '?'

  Object.keys(options).forEach(key => {
    if (query.length > 1) {
      query += '&'
    }

    const optionType = key.split(' ').join('_')
    let optionVal

    if (['limit', 'offset', 'order'].includes(optionType)) {
      optionVal = options[key]
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

export const getLimit = query => {
  const queryParts = query.split("&")
  return Number(queryParts[queryParts.length - 3].split('=')[1])
}

export const getOffset = query => {
  const queryParts = query.split("&")
  return Number(queryParts[queryParts.length - 2].split('=')[1])
}

export const getSort = query => {
  const queryParts = query.split("&")
  return queryParts[queryParts.length - 1].split('=')[1]
}
