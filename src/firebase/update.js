import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export const update = async (collectionName, documentId, data) => {
  return setDoc(doc(db, collectionName, documentId), data, {
    merge: true,
  }).then(() => {
    return;
  });
};
