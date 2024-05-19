import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  if (typeof number !== 'number' || number < 0) return;
  try {
    const dbJson = await fs.readFile(PATH_DB, 'utf-8');
    const dbArr = JSON.parse(dbJson);

    // Generate newContacts
    const newContactsArr = [];
    for (let i = 0; i < number; i++) {
      newContactsArr.push(createFakeContact(number));
    }
    const updatedContactsArr = dbArr.concat(newContactsArr);

    // rewrite db.json
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContactsArr, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.log(error);
  }
};
