import React from 'react'
import { buildQuery } from '../../../util/queryUtil'

export default ({ updateRoute }) => {

  const buildQueryAndUpdateRoute = (limit) => {
    updateRoute(`/jobs/${buildQuery(this.state)}`, this.props.currentQuery.slice(5), limit)
  }

  return (
    <div className='sort-and-limit-options'>

    </div>
  )
}
