import { Contact } from './Contact';

export class ContactList {
  private contacts: Contact[] = [];
  private nextId: number = 1;

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(nombre: string, email: string, telefono: string): Contact {
    const newContact: Contact = {
      id: this.nextId.toString(),
      nombre,
      email,
      telefono
    };
    this.contacts.push(newContact);
    this.nextId++;
    return newContact;
  }

  deleteContact(id: string): boolean {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      return true;
    }
    return false;
  }
}