import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
    try {

        const dataContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        const remainingContacts = dataContacts.filter(() => Math.random() >= 0.5);
        await fs.writeFile(PATH_DB, JSON.stringify (remainingContacts,null, 2));
        console.log(`Deleted ${dataContacts.length - remainingContacts.length} from ${dataContacts.length} contacts.`);
    } catch (error) {
        console.log(error, 'Failed to remove contacts');
    }
};

await thanos();
