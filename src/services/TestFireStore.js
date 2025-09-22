// src/services/testFirestore.js
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function testFirestore() {
  try {
    // Try writing a dummy doc
    const docRef = await addDoc(collection(db, "testCollection"), { hello: "world" });
    console.log("✅ Write succeeded:", docRef.id);

    // Try reading it back
    const snapshot = await getDocs(collection(db, "testCollection"));
    snapshot.forEach(doc => console.log("📄 Read doc:", doc.id, doc.data()));

    return true;
  } catch (e) {
    console.error("❌ Firestore test failed:", e);
    return false;
  }
}
