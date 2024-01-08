import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('post to database');
const dbPromise = openDB('jate', 1);
const db = await dbPromise;
const postTrans = db.transaction('jate', 'readwrite');
const putStore = postTrans.objectStore('jate');
await putStore.put({ id: 1, content: 'Hello!' });
await tx.done;



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('get from database');
const dbGet = openDB('jate', 1);
const database = await dbGet;
const getTrans = database.transaction('jate', 'readonly');
const getStore = getTrans.objectStore('jate');
const content = await getStore.get(1);
console.log(content);
await tx.done;

initdb();