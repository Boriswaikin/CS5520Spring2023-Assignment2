import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./Firebase-setup";

export async function writeToDB(data) {
  // Add a new document with a generated id.
  //replace db with the firestore variable exported in firebase-setup
  try {
    await addDoc(collection(db, "entries"), data);
    // console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log("Got Error");
  }
}

export async function deletefromDB(deleteId) {
  try {
    await deleteDoc(doc(db, "entries", deleteId));
  } catch (err) {
    console.log("error");
  }
}

export async function updateDB(id, status) {
  try {
    await updateDoc(doc(db, "entries", id), {
      reviewedStatus: status,
    });
  } catch (err) {
    console.log("error");
  }
}
