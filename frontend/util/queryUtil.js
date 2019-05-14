export const buildQuery = (queryData, query='?', limit=10, offset=1, setNewLimit=false, setNewOffset=false) => {
  if (query.length > 1) {
    const queryParts = query.slice(2).split('&');

    query = queryParts.slice(0, queryParts.length - 2).join('')
    limit = setNewLimit ? limit : queryParts[queryParts.length - 2].split('=')[1]
    offset = setNewOffset ? offset : queryParts[queryParts.length - 1].split('=')[1]
  }

  Object.keys(queryData).forEach(key => {
    if (query.length > 1) {
      query += '&'
    }
    const dataType = key.split(' ').join('_').toLowerCase()
    const dataVal = queryData[key].split(' ').join('_').toLowerCase()
    query += `${dataType}=${dataVal}`
  })
  
  return `${query}&limit=${limit}&offset=${offset}`
}

export const parseQuery = query => {
  let filters = ''
  let limit = ''
  let offset = ''
  const queryArray = query.slice(1).split('&')

  queryArray.forEach((filter, i) => {
    const filterValue = filter.split('=')[1]

    if (i < queryArray.length - 2) {
      if (filters.length) {
        filters += ' '
      }
      filters += filterValue
    }

    else if (i === queryArray.length - 2) {
      limit = filterValue
    }

    else {
      offset = filterValue
    }
  })

  return {
    filters,
    limit,
    offset
  }
}

export const getLimit = query => {
  const queryParts = query.split("&")
  return Number(queryParts[queryParts.length - 2].split('=')[1])
}

export const getOffset = query => {
  const queryParts = query.split("&")
  return Number(queryParts[queryParts.length - 1].split('=')[1])
}
