import React from "react";
import PropTypes from "prop-types";

const ContactsPage = () => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};

ContactsPage.PropTypes = {
  contacts: PropTypes.array.isRequired,
  onAddNewContact: PropTypes.func.isRequired,
};

export default ContactsPage;
