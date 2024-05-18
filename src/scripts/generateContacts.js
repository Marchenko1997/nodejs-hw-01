import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const getDataContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    const newDataContacts = [];
    for (let i = 0; i < number; i++) {
      newDataContacts.push(createFakeContact());
    }
    const allDataContacts = getDataContacts.concat(newDataContacts);
    await fs.writeFile(PATH_DB, JSON.stringify(allDataContacts, null, 2));
    console.log(`Successfully generated and added ${number} contacts`);
    console.log(`Count contacts to db: ${allDataContacts.length}`);
  } catch (error) {
    console.log(error, 'Failed to generate file');
  }
};

await generateContacts(10);
