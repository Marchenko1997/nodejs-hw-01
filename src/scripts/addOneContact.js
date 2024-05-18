import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
       const dataContacts = JSON.parse(await fs.readFile (PATH_DB, 'utf-8'));
       const newContact = createFakeContact();
       dataContacts.push(newContact);
       await fs.writeFile(PATH_DB,JSON.stringify (dataContacts, null, 2));
       console.log('Successfully added one contact', newContact);
    } catch (error) {
        console.log(error, 'Failed to add contact');
    }
};

await addOneContact();
