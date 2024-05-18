import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {

        const dataContacts = JSON.parse(await fs.readFile (PATH_DB, 'utf-8'));
        return dataContacts;
    } catch (error) {
        console.log(error, 'Failed to get contacts');
    }
};

console.log(await getAllContacts());
