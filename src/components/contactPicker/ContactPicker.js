import React from "react";
import PropTypes from "prop-types";

const ContactPicker = () => {
  return <p></p>;
};

ContactPicker.propTypes = {
  contacts: PropTypes.array.isRequired,
  currentName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactPicker;
