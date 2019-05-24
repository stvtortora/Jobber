import { UPDATE_ROUTE } from '../actions/routeActions'

export default (state = '/', action) => {
  switch (action.type) {
    case UPDATE_ROUTE:
    console.log(action)
      return action.newRoute;
    default:
      return state;
  }
}
