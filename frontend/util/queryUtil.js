export const buildQuery = queryData => {
  let query = '?'

  Object.keys(queryData).forEach(key => {
    if (query.length > 1) {
      query += '&'
    }
    const dataType = key.split(' ').join('-').toLowerCase()
    const dataVal = queryData[key].split(' ').join('-').toLowerCase()
    query += `${dataType}=${dataVal}`
  })

  return query
}
