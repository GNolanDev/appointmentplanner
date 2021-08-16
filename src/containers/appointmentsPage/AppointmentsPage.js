import React, { useState } from "react";
import PropTypes from "prop-types";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  let [currentTitle, setCurrentTitle] = useState("");
  let [currentContact, setCurrentContact] = useState("");
  let [currentDate, setCurrentDate] = useState("");
  let [currentTime, setCurrentTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    props.onAddNewAppointment(
      currentTitle,
      currentContact,
      currentDate,
      currentTime
    );
    setCurrentTitle("");
    setCurrentContact("");
    setCurrentDate("");
    setCurrentTime("");
  };

  const handleAnyChange = (event) => {
    switch (event.target.name) {
      case "title":
        setCurrentTitle(event.target.value);
        break;
      case "contact":
        setCurrentContact(event.target.value);
        break;
      case "date":
        setCurrentDate(event.target.value);
        break;
      case "time":
        setCurrentTime(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={currentTitle}
          contact={currentContact}
          date={currentDate}
          time={currentTime}
          onAnyChange={handleAnyChange}
          onSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList arr={props.appointments} />
      </section>
    </div>
  );
};

AppointmentsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  appointments: PropTypes.array.isRequired,
  onAddNewAppointment: PropTypes.func.isRequired,
};

export default AppointmentsPage;
