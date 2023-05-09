import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export const getAll = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const results = [];
  querySnapshot.forEach((doc) => {
    let data = doc.data();
    if (data) {
      Object.assign(data, { id: doc.id });
    }
    results.push(data);
  });

  return results;
};

export const get = async (collectionName, documentId) => {
  const docSnap = await getDoc(doc(db, collectionName, documentId));

  return docSnap.data();
};

export const getWhere = async (collectionName, field, value) => {
  const querySnapshot = await getDocs(
    query(collection(db, collectionName), where(field, "==", value))
  );

  let results = [];
  querySnapshot.forEach((doc) => {
    let data = doc.data();
    if (data) {
      data = { ...data, id: doc.id };
    }
    results.push(data);
  });

  return results;
};
