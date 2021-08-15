import { getNewId } from "../../helpers/getNewId";

class Contact {
  constructor(name, phone, email) {
    this.name = name || "";
    this.phone = phone || "";
    this.email = email || "";
    this.id = getNewId();
  }
}

export default Contact;
