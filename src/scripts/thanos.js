import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { getAllContacts } from './getAllContacts.js';

export const thanos = async () => {
  try {
    const allContacts = await getAllContacts();
    let randomContactsArr = [];
    for (let i = 0; i < allContacts.length; i++) {
      const random = Math.random();
      if (random < 0.5) {
        randomContactsArr.push(allContacts[i]);
      }
    }
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(randomContactsArr, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.log(error);
  }
};

await thanos();
