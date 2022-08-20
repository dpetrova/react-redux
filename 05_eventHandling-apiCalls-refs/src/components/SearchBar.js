import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(event) {
    console.log("Element was clicked");
  }

  onFormSubmit1(event) {
    //prevent default subtit behaviour (automatically submit and refresh the page when Enter is pressed when typing in an input)
    event.preventDefault();
    this.props.onSearchBarSubmit(this.state.term); //call parent's callback passed as a prop
  }

  onFormSubmit2 = (event) => {
    //prevent default subtit behaviour (automatically submit and refresh the page when Enter is pressed when typing in an input)
    event.preventDefault();
    this.props.onSearchBarSubmit(this.state.term); //call parent's callback passed as a prop
  };

  render() {
    return (
      <div className="ui segment">
        {/* use arrow function here if access the normal function */}
        {/* <form
          onSubmit={(event) => this.onFormSubmit1(event)}
          className="ui form"
        > */}
        {/* the accessed function must be arrow function   */}
        <form onSubmit={this.onFormSubmit2} className="ui form">
          <div className="field">
            <label>Image search</label>
            {/* <input
              type="text"
              placeholder="Search..."
              onChange={this.onInputChange}
              onClick={this.onInputClick}
            /> */}
            {/* alternate syntax */}
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
