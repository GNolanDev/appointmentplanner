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
  let [currentContactName, setCurrentContactName] = useState("No Name");
  let [currentDate, setCurrentDate] = useState("");
  let [currentTime, setCurrentTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    // do nothing if the contact name is not in the array of contacts
    if (
      props.contacts.filter((ct) => ct.name === currentContactName).length <= 0
    ) {
      return;
    }
    props.onAddNewAppointment(
      currentTitle,
      currentContactName,
      currentDate,
      currentTime
    );
    setCurrentTitle("");
    setCurrentContactName("No Name");
    setCurrentDate("");
    setCurrentTime("");
  };

  const handleAnyChange = (event) => {
    switch (event.target.name) {
      case "title":
        setCurrentTitle(event.target.value);
        break;
      case "contact":
        // may need to use name of contact as 'value' to fetch full contact from array
        setCurrentContactName(event.target.value);
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
          contacts={props.contacts}
          title={currentTitle}
          currentName={currentContactName}
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
