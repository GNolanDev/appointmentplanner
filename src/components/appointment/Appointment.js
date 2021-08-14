import Contact from "../contact/Contact";

class Appointment {
  constructor(title, contact, date, time) {
    this.title = title || "";
    this.contact = contact || new Contact();
    this.date = date || "";
    this.time = time || "";
  }
}

export default Appointment;
