import React from "react";

const AppointmentsPage = () => {
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};

AppointmentsPage.PropTypes = {
  contacts: PropTypes.array.isRequired,
  appointments: PropTypes.array.isRequired,
  onAddNewAppointment: PropTypes.func.isRequired,
};

export default AppointmentsPage;
