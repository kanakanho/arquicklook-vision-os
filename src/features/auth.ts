'use client';

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

export const googleLogin = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  new Promise<void>((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.error(error);
        reject();
      });
  });
};

export const googleLogout = async (): Promise<void> => {
  signOut(auth).catch((error) => {
    console.error(error);
  });
  window.location.reload();
};
