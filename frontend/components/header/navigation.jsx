import React from 'react'
import Logo from '../logo'
import PrimaryNavigation from './primaryNavigation'
import CreateNavigation from './createNavigation'
import UserNavigation from './userNavigation'
import { connect } from 'react-redux'
import { updateRoute } from '../../actions/routeActions'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.navigateTo = this.navigateTo.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.onWhiteHeaderPage = this.onWhiteHeaderPage.bind(this)

    this.state = {
      klassName: 'non-stick-bar-container',
      fontColor: this.onWhiteHeaderPage() ? 'gray' : 'white'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentRoute !== this.props.currentRoute) {
      this.setState({
        fontColor: this.onWhiteHeaderPage() ? 'gray' : 'white'
      })
    }
  }

  onWhiteHeaderPage() {
    return this.props.currentRoute !== '/' && this.props.currentRoute.indexOf('/jobs/?') === -1
  }

  handleScroll(e) {
    const newKlassName = window.scrollY > 50 ? 'stick-bar-container' : 'non-stick-bar-container';
    if (newKlassName !== this.state.klassName) {
      this.setState({
        klassName: window.scrollY > 50 ? 'stick-bar-container' : 'non-stick-bar-container',
        fontColor: window.scrollY > 50 || this.onWhiteHeaderPage() ? 'gray' : 'white'
      })
    }
  }

  navigateTo (path) {
    this.props.updateRoute(path)
  }

  render () {
    return (
      <div className={this.state.klassName}>
        <div className='center-bar'>
          <div className='top-bar'>
            <Logo logoColor={this.state.fontColor}/>
            <PrimaryNavigation navigateTo={this.navigateTo} arrowColor={this.state.fontColor}/>
            <CreateNavigation navigateTo={this.navigateTo} />
            <UserNavigation navigateTo={this.navigateTo} faColor={this.state.fontColor} currentRoute={this.props.currentRoute}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentRoute: state.currentRoute
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRoute: path => dispatch(updateRoute(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
