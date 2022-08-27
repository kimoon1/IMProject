import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../app/firebase';

export const createData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'gameInfos'), data);
    console.log(docRef);
  } catch (e) {
    console.error('Error adding document:', e);
  }
};
function CreateData() {}

export default CreateData;
