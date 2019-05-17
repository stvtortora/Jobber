import React from 'react'

export default ({ totalCount, totalOnPage, limit, order, offset, updateSearch }) => {
  const firstPost = totalCount > 0 ? limit * (offset - 1) + 1 : 0
  const lastPost = firstPost + Math.min(totalCount, limit) - 1

  return (
    <div className='sort-and-limit-options'>
      <div className='showing-text'>{`Showing ${firstPost}-${lastPost} of ${totalCount} jobs`}</div>
      <div className='sort-and-limit-forms'>
        <form>
          <select onChange={updateSearch('order')}>
            <option selected={order === 'created_at:desc'} value='created_at:desc'>Sort By: Newest</option>
            <option selected={order === 'title:asc'} value='title:asc'>Sort By: Name Ascending</option>
            <option selected={order === 'title:desc'} value='title:desc'>Sort By: Name Decending</option>
          </select>
        </form>
        <form>
          <select onChange={updateSearch('limit')}>
            <option selected={limit === 10} value="10">Show: 10</option>
            <option selected={limit === 20} value="20">Show: 20</option>
            <option selected={limit === 50} value="50">Show: 50</option>
          </select>
        </form>
      </div>
    </div>
  )
}
