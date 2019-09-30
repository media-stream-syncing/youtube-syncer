import React, { Component } from 'react';
// import s from './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onSearchTermChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmission = event => {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.onFormSubmit(this.state.term);

    // TODO: callback from parent component;
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmission}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onSearchTermChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
