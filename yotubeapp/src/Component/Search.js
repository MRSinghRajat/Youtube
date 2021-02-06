import React from "react";

class Search extends React.Component {
  state = { text: '' };

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  };
  onFormSubmit = (event) =>{

    event.preventDefault();
    this.props.onFormSubmit(this.state.text)
  }
 
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              value={this.state.text}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
