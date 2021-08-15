import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ContactForm from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  let [currentName, setCurrentName] = useState("");
  let [currentPhone, setCurrentPhone] = useState("");
  let [currentEmail, setCurrentEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (
      props.contacts.filter((contact) => contact.name === currentName).length <=
      0
    ) {
      props.onAddNewContact(currentName, currentPhone, currentEmail);
      setCurrentName("");
      setCurrentPhone("");
      setCurrentEmail("");
    }
  };

  const handleAnyChange = (event) => {
    switch (event.target.name) {
      case "name":
        setCurrentName(event.target.value);
        break;
      case "phone":
        setCurrentPhone(event.target.value);
        break;
      case "email":
        setCurrentEmail(event.target.value);
        break;
      default:
        break;
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (
      props.contacts.filter((contact) => contact.name === currentName).length >
      0
    ) {
      alert("Name is a duplicate of one already in Contacts");
    }
  }, [currentName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={currentName}
          phone={currentPhone}
          email={currentEmail}
          onAnyChange={handleAnyChange}
          onSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  onAddNewContact: PropTypes.func.isRequired,
};

export default ContactsPage;
