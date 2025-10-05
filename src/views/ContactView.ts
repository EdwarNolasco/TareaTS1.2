import { Contact } from '../models/Contact';
export class ContactView {
  displayContacts(contacts: Contact[]): void {
    if (contacts.length === 0) {
      console.log("No hay contactos en la lista.");
    } else {
      console.log("=== Lista de Contactos ===");
      contacts.forEach(c => {
        console.log(`ID: ${c.id} | Nombre: ${c.nombre} | Email: ${c.email} | Tel: ${c.telefono}`);
      });
    }
  }

  displayMessage(message: string): void {
    console.log(message);
  }
}
