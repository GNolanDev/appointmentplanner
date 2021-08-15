import Contact from "../contact/Contact";
import { getNewId } from "../../helpers/getNewId";

class Appointment {
  constructor(title, contact, date, time) {
    this.title = title || "";
    this.contact = contact || new Contact();
    this.date = date || "";
    this.time = time || "";
    this.id = getNewId();
  }
}

export default Appointment;
