import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.search(parseQuery(this.props.currentRoute))
  }

  

  render() {
    return(
      <div>Hello</div>
    )
  }
}

export default Search
