import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Appointment from "./components/appointment/Appointment";

import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage";
import ContactsPage from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addNewContact = (name, phone, email) => {
    const newContact = new Contact(name, phone, email);
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const addNewAppointment = (title, contact, date, time) => {
    const newAppointment = new Appointment(title, contact, date, time);
    setAppointments((prevAppointments) => [
      ...prevAppointments,
      newAppointment,
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} onAddNewContact={addNewContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              onAddNewAppointment={addNewAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
