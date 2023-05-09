import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export const add = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), data);

  return { ...data, id: docRef.id };
};
