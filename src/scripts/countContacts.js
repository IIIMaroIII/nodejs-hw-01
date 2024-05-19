import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const allContacts = await getAllContacts();
    return `Current length of Contacts in db.json is ${allContacts.length}`;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
