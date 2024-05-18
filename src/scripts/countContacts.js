import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
 const dataContacts = JSON.parse( await fs.readFile(PATH_DB, 'utf-8'));
 return dataContacts.length;
    } catch (error) {
        console.log(error, 'Failed to get contacts');
    }
};

console.log(await countContacts());
