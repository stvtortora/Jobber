export const buildQuery = (queryData, query='?', limit=10, setNewLimit=false) => {
  if (query.length > 1) {
    queryParts = query.split('&');
    query = queryParts.slice(0, queryParts.length - 1)
    limit = setNewLimit ? limit : queryParts[queryParts.length - 1].split('=')[1]
  }

  Object.keys(queryData).forEach(key => {
    if (query.length > 1) {
      query += '&'
    }
    const dataType = key.split(' ').join('_').toLowerCase()
    const dataVal = queryData[key].split(' ').join('_').toLowerCase()
    query += `${dataType}=${dataVal}`
  })

  return `${query}&limit=${limit}`
}

export const parseQuery = query => {
  let filters = ''
  let limit = ''
  const queryArray = query.slice(1).split('&')
  // console.log(query, 'query')
  queryArray.forEach((filter, i) => {
    const filterValue = filter.split('=')[1]
    if (filters.length) {
      filters += ' '
    }
    if (i < queryArray.length - 1) {
      filters += filterValue
    } else {
      limit = filterValue
    }
  })

  return {
    filters,
    limit
  }
}
