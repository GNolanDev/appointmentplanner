import React from "react";
import PropTypes from "prop-types";

const ContactForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={props.name}
        name="name"
        onChange={props.onAnyChange}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        value={props.phone}
        name="phone"
        pattern="^0\d{7,10}$"
        onChange={props.onAnyChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={props.email}
        name="email"
        onChange={props.onAnyChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onAnyChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
