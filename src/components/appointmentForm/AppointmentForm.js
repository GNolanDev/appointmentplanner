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
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        value={props.title}
        name="title"
        id="title"
        onChange={props.onAnyChange}
      />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        value={props.date}
        name="date"
        id="date"
        min={getTodayString()}
        onChange={props.onAnyChange}
      />
      <label htmlFor="time">Time:</label>
      <input
        type="time"
        value={props.time}
        name="time"
        id="time"
        onChange={props.onAnyChange}
      />
      <ContactPicker
        contacts={props.contacts}
        onChange={props.onAnyChange}
        currentName={props.currentName}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

AppointmentForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  currentName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onAnyChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AppointmentForm;
