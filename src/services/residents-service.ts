"use server";

import { adminDb } from "@/lib/firebase/server";
import { FieldValue } from "firebase-admin/firestore";

const RESIDENTS_COLLECTION = 'residents';

export async function createResident(
  userId: string,
  fullName: string,
  email: string,
) {
  const docRef = adminDb.collection(RESIDENTS_COLLECTION).doc(userId);

  // Add post data to Firestore
  const data = {
    fullName,
    email,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  };

  await docRef.set(data);
}