// app.js
import { db, doc, setDoc, getDoc, serverTimestamp } from './firebase.js';

export async function createUserDoc(user){
  const uref = doc(db, 'users', user.uid);
  const snap = await getDoc(uref);
  if(!snap.exists()){
    await setDoc(uref, {
      uid: user.uid,
      email: user.email,
      name: user.displayName || user.email.split('@')[0],
      avatar: '',
      bio: '',
      createdAt: serverTimestamp(),
      followers: 0,
      following: 0,
      isAdmin: false
    });
  }
}
