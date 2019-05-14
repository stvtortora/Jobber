export const buildQuery = (queryData, query='?', limit=10, offset=1, sort='created_at:desc', setNewLimit=false, setNewOffset=false, setNewSort=false) => {
  if (query.length > 1) {
    const queryParts = query.slice(2).split('&');

    query = queryParts.slice(0, queryParts.length - 3).join('')
    limit = setNewLimit ? limit : queryParts[queryParts.length - 3].split('=')[1]
    offset = setNewOffset ? offset : queryParts[queryParts.length - 2].split('=')[1]
    sort = setNewSort ? sort : queryParts[queryParts.length - 1].split('=')[1]
  }

  Object.keys(queryData).forEach(key => {
    if (query.length > 1) {
      query += '&'
    }
    const dataType = key.split(' ').join('_').toLowerCase()
    const dataVal = queryData[key].split(' ').join('_').toLowerCase()
    query += `${dataType}=${dataVal}`
  })

  return `${query}&limit=${limit}&offset=${offset}&sort=${sort}`
}

export const parseQuery = query => {
  let filters = ''
  let limit = ''
  let offset = ''
  const queryArray = query.slice(1).split('&')

  queryArray.forEach((filter, i) => {
    const filterValue = filter.split('=')[1]

    if (i < queryArray.length - 3) {
      if (filters.length) {
        filters += ' '
      }
      filters += filterValue
    }


    else if (i === queryArray.length - 3) {
      limit = filterValue
    }

    else if (i === queryArray.length - 2) {
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
