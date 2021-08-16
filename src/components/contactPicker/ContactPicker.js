import React from "react";
import PropTypes from "prop-types";

const ContactPicker = (props) => {
  const optionsArray = props.contacts.map((contact) => {
    return (
      <option value={contact.name} key={contact.id}>
        {contact.name}
      </option>
    );
  });
  return (
    <select name="contact" onChange={props.onChange} value={props.currentName}>
      <option value="No Name">No contact selected</option>
      {optionsArray}
    </select>
  );
};

ContactPicker.propTypes = {
  contacts: PropTypes.array.isRequired,
  currentName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactPicker;
