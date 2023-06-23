import React from "react";
import { Form, Field } from "react-final-form";

const StreamForm = (props) => {
  const renderInput = (formProps) => {
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
        {renderError(formProps.meta)}
      </div>
    );
  };

  const renderError = (metaProps) => {
    if (metaProps.touched && metaProps.error) {
      return (
        <div className="ui error message">
          <div className="header">{metaProps.error}</div>
        </div>
      );
    }
  };

  const onSubmit = (formValues) => {
    // console.log(formValues);
    props.onSubmit(formValues);
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};
        if (!formValues.title) {
          errors.title = "Title is required!";
        }
        if (!formValues.description) {
          errors.description = "Description is required!";
        }
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field name="title" component={renderInput} label="Title" />
          <Field
            name="description"
            component={renderInput}
            label="Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      )}
    />
  );
};

export default StreamForm;
