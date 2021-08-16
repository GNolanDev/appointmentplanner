import React from "react";
import PropTypes from "prop-types";
import ContactPicker from "../contactPicker/ContactPicker";

const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        value={props.title}
        name="title"
        onChange={props.onAnyChange}
      />
      <input
        type="date"
        value={props.date}
        name="date"
        min={getTodayString()}
        onChange={props.onAnyChange}
      />
      <input
        type="time"
        value={props.time}
        name="time"
        onChange={props.onAnyChange}
      />
      <ContactPicker contacts={props.contacts} />
      <input type="submit" value="Submit" />
    </form>
  );
};

AppointmentForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  // best to pass full contact object here, or just the name?
  contact: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onAnyChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AppointmentForm;
