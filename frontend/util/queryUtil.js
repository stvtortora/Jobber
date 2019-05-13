export const buildQuery = queryData => {
  let query = '?'

  Object.keys(queryData).forEach(key => {
    if (query.length > 1) {
      query += '&'
    }
    const dataType = key.split(' ').join('_').toLowerCase()
    const dataVal = queryData[key].split(' ').join('_').toLowerCase()
    query += `${dataType}=${dataVal}`
  })

  return query
}

export const parseQuery = query => {
  let parsedQuery = ''
  const filters = query.slice(1).split('&')

  filters.forEach(filter => {
    const filterValue = filter.split('=')[1]
    if (parsedQuery.length) {
      parsedQuery += ' '
    }
    parsedQuery += filterValue
  })

  return parsedQuery
}
