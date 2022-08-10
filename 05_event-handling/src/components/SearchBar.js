import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(event) {
    console.log("Element was clicked");
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
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
