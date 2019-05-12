import React from 'react'
import Logo from './logo'
import PrimaryNavigation from './primaryNavigation'
import CreateNavigation from './createNavigation'
import UserNavigation from './userNavigation'
import { connect } from 'react-redux'
import { updateRoute } from '../../actions/routeActions'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      klassName: 'non-stick-bar-container',
      fontColor: 'white'
    }
    this.navigateTo = this.navigateTo.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    const newKlassName = window.scrollY > 50 ? 'stick-bar-container' : 'non-stick-bar-container';
    if (newKlassName !== this.state.klassName) {
      console.log(newKlassName, this.state.klassName)
      this.setState({
        klassName: window.scrollY > 50 ? 'stick-bar-container' : 'non-stick-bar-container',
        fontColor: window.scrollY > 50 ? 'gray' : 'white'
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
            <CreateNavigation navigateTo={this.navigateTo}/>
            <UserNavigation navigateTo={this.navigateTo} faColor={this.state.fontColor}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRoute: path => dispatch(updateRoute(path))
  }
}

export default connect(null, mapDispatchToProps)(Navigation)
