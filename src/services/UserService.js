import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function getAllUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
