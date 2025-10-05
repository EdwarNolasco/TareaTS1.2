import { ContactList } from './models/ContactList';
import { ContactView } from './views/ContactView';
import { ContactController } from './controllers/ContactController';

// Patrón MVC
const contactList = new ContactList();
const contactView = new ContactView();
const controller = new ContactController(contactList, contactView);

// Mostrar lista inicial (vacía)
console.log("======obteniendo contactos======");
controller.showContacts();

// Agregar contactos
console.log("\n");
console.log("======agregando contactos======");
controller.add('María García', 'maria@email.com', '098-765-4321');
controller.add('Carlos López', 'carlos@email.com', '555-123-4567');

console.log("\n");
console.log("======obteniendo contactos======");
controller.showContacts();

// Eliminar contacto (usar ID específico)
console.log("\n");
console.log("======eliminando contacto=======");
controller.remove('2'); // Eliminar contacto con ID "2"

//Obtener contactos finales
console.log("\n");
console.log("======obteniendo contactos======");
controller.showContacts();

// Intentar eliminar contacto inexistente
console.log("\n");
console.log("======eliminando contacto inexistente=======");
controller.remove('2'); // ID que no existe

// Mostrar lista final
console.log("\n");
console.log("======contactos finales======");
controller.showContacts();