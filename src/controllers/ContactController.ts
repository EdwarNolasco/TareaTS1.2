import { ContactList } from '../models/ContactList';
import { ContactView } from '../views/ContactView';

export class ContactController {
  constructor(
    private contactList: ContactList,
    private contactView: ContactView
  ) {}

  add(nombre: string, email: string, telefono: string): void {
    const newContact = this.contactList.addContact(nombre, email, telefono);
    this.contactView.displayMessage(`Contacto "${newContact.nombre}" agregado.`);
  }

  remove(id: string): void {
    const success = this.contactList.deleteContact(id);
    if (success) {
      this.contactView.displayMessage('Contacto eliminado.');
    } else {
      this.contactView.displayMessage('Contacto no encontrado.');
    }
  }

  showContacts(): void {
    const contacts = this.contactList.getContacts();
    this.contactView.displayContacts(contacts);
  }
}