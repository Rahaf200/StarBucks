import { db } from './firebase'; // Firebase database instance
import { collection, doc, setDoc, getDoc, deleteDoc, updateDoc, getDocs } from 'firebase/firestore';
import type { WithFieldValue, DocumentData } from 'firebase/firestore';

// Define the User type and export it
export interface User {
  email: string;
  firstName: string;
  lastName: string;
  subscribe: boolean;
  userId?: string; // Make userId optional for new user creation
}

// Generic class for interacting with Firestore collections
class FirestoreService<T> {
  collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  // Create a new document in Firestore
  async create(data: T, id: string): Promise<void> {
    const docRef = doc(db, this.collectionName, id);
    const firestoreData: WithFieldValue<DocumentData> = data as WithFieldValue<DocumentData>;
    await setDoc(docRef, firestoreData); // Add document with data
  }

  // Get a document by its ID
  async get(id: string): Promise<T | null> {
    const docRef = doc(db, this.collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as T; // Return the document data as the type T
    } else {
      return null; // Return null if document does not exist
    }
  }

  // Update a document in Firestore
  async update(id: string, data: T): Promise<void> {
    const docRef = doc(db, this.collectionName, id);
    const firestoreData: WithFieldValue<DocumentData> = data as WithFieldValue<DocumentData>;
    await updateDoc(docRef, firestoreData); // Update the document with the new data
  }

  // Delete a document by its ID
  async delete(id: string): Promise<void> {
    const docRef = doc(db, this.collectionName, id);
    await deleteDoc(docRef); // Delete the document
  }

  // Get all documents in the collection
  async getAll(): Promise<T[]> {
    const queryRef = collection(db, this.collectionName);
    const querySnapshot = await getDocs(queryRef);
    return querySnapshot.docs.map((doc) => doc.data() as T); // Map the snapshot data to the generic type
  }
}

export default FirestoreService;
