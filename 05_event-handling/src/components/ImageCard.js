import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    //initialize state with image spans of 0
    this.state = { spans: 0 };

    //create and assign ref
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
    //add event listener to the image and call a callback when image is loaded and available
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  //function to get particular height of an image and calculate and set needed span in a grid column
  setSpans = () => {
    // get particular height of an image
    const height = this.imageRef.current.clientHeight;
    // calculate needed span in a grid column
    const spans = Math.ceil(height / 10); // 10 is grid-auto-rows set in css
    // set to a state
    this.setState({ spans });
  };

  render() {
    const { urls, description } = this.props.image;

    return (
      /* a particular image will take certain cells (spans) in a column */
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* pass ref as a prop */}
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
