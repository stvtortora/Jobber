import SessionForm from './sessionForm'
import { connect } from 'react-redux'
import { updateRoute } from '../../../actions/routeActions'
import { login } from '../../../actions/sessionActions'

const mapStateToProps = state => {
  return {
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(login(user)),
    updateRoute: newRoute => dispatch(updateRoute(newRoute))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
