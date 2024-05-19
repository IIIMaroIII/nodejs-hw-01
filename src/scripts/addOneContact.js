import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const dbJson = await fs.readFile(PATH_DB, 'utf-8');
    const dbArr = JSON.parse(dbJson);
    const newContact = createFakeContact();
    const updatedContactsArr = dbArr.concat(newContact);
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContactsArr, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.log(error);
  }
};

await addOneContact();
