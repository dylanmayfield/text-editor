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
export const putDb = async (content) => { console.error('post to database');
const dbPromise = await openDB('jate', 1);
const db = dbPromise;
const trans = db.transaction('jate', 'readwrite');
const store = trans.objectStore('jate');
const request = store.put({ id: 1, value: content });

const result = await request;
console.log(result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {console.error('get from database');
const dbGet = openDB('jate', 1);
const db = await dbGet;
const trans = db.transaction('jate', 'readonly');
const store = trans.objectStore('jate');
const request = await store.get(1);
const result = await request;
console.log(result.value);
}

initdb();