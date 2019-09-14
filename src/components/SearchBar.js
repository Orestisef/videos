import React from 'react';

class SearchBar extends React.Component {
  //initiallize input text
  state = { term: ''};

  onInputChange = event => {
    //assign to the state prop the value of input
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    //the default action of the event will not be triggered
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className = "search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className = "ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              //eventhandler prop
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>

    );
  }
}

export default SearchBar;
