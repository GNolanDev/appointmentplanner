import React, { useEffect } from "react";
import PropTypes from "prop-types";

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
      contacts.filter((contact) => contact.name === currentName).length <= 0
    ) {
      props.onAddNewContact(currentName, currentPhone, currentEmail);
      setCurrentName("");
      setCurrentPhone("");
      setCurrentEmail("");
    }
  };

  const handleNameChange = (event) => {
    setCurrentName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setCurrentPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setCurrentEmail(event.target.value);
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (contacts.filter((contact) => contact.name === currentName).length > 0) {
      alert("Name is a duplicate of one already in Contacts");
    }
  }, [currentName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={currentName}
          onNameChange={handleNameChange}
          phone={currentPhone}
          onPhoneChange={handlePhoneChange}
          email={currentEmail}
          onEmailChange={handleEmailChange}
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

ContactsPage.PropTypes = {
  contacts: PropTypes.array.isRequired,
  onAddNewContact: PropTypes.func.isRequired,
};

export default ContactsPage;
