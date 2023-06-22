import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
// import { connect } from "react-redux";
// import { createStream } from "../../actions";

class StreamForm extends Component {
  renderInput = (formProps) => {
    // console.log(formProps);
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />
      <div
        className={`field ${
          formProps.meta.error && formProps.meta.touched ? "error" : ""
        }`}
      >
        {/* label */}
        <label>{formProps.label}</label>
        {/* input field */}
        <input {...formProps.input} autoComplete="off" />
        {/* validation error message */}
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  renderError(metaProps) {
    if (metaProps.touched && metaProps.error) {
      return (
        <div className="ui error message">
          <div className="header">{metaProps.error}</div>
        </div>
      );
    }
  }

  onSubmit = (formValues) => {
    // console.log(formValues);
    // this.props.createStream(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    console.log(this.props);
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Title is required!";
  }
  if (!formValues.description) {
    errors.description = "Description is required!";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate: validate,
})(StreamForm);

// const formWrapped = reduxForm({
//   form: "streamForm",
//   validate: validate,
// })(StreamForm);

// export default connect(null, { createStream })(formWrapped);
