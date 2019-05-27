import SearchPage from './searchPage'
import { connect } from 'react-redux'
import { searchCompanies } from '../../../actions/companiesActions'
import { updateRoute } from '../../../actions/routeActions'
import { parseQuery } from '../../../util/queryUtil'
import merge from 'lodash/merge'

const mapStateToProps = state => {
  const companiesInfo = state.records.companies.info

  const formattedSearchInfo = state.records.companies.ids.reduce((formattedInfo, companyId) => {
    const company = companiesInfo[companyId]
    const positionsCount = company['job_posts']
    const formattedCompany = merge({}, companiesInfo[companyId], { job_posts_display: `${positionsCount} Open ${positionsCount > 1 ? 'Positions' : 'Position'}`})

    formattedInfo[companyId] = formattedCompany
    return formattedInfo
  }, {})

  const formattedSearchResults = merge({}, state.records.companies, { info: formattedSearchInfo })

  const currentQuery = state.currentRoute.slice(10)
  return {
    currentQuery,
    routePrefix: '/companies',
    currentRoute: state.currentRoute,
    isThisComponentsRoute: state.currentRoute.slice(0, 12) == '/companies/?',
    searchResults: formattedSearchResults,
    searchSpecifications: parseQuery(currentQuery),
    filterTypes: ['industry', 'team_size'],
    searchResultOptions: {
      stylingId: 'company-result',
      mainTitleKey: 'title',
      subTitleKey: 'industry',
      buttonContentKey: 'job_posts_display'
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: (query) => dispatch(searchCompanies(query)),
    updateRoute: newRoute => dispatch(updateRoute(newRoute))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
