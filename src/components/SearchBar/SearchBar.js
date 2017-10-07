import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }

    this.search = this.search.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
  }

  search() {
    this.props.onSearch(this.state.searchTerm)
  }

  handleTermChange(event) {
    this.setState({searchTerm: event.target.value})
  }
/*    figure how to add this function
  handleKeyPress(event) {
    if(event.key === 'Enter') {
      this.search();
    }
  }
*/
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
               onChange={this.handleTermChange}
               //onKeyPress={this.handleKeyPress}
               />
        <a onClick={this.search}>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;
