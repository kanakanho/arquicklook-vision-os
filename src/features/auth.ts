'use client';

import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useUserMutators } from '../state/firebaseUserState';
import { useLoginMutators } from '../state/login';
import { auth } from '../utils/firebase';

export const googleLogin = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  new Promise<void>((resolve, reject) => {
    signInWithRedirect(auth, provider)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.error(error);
        reject();
      });
  });
};

export const logout = async (): Promise<void> => {
  signOut(auth).catch((error) => {
    console.error(error);
  });
  window.location.reload();
};

export const useIsSigned = (): boolean | undefined => {
  const [isLogin, setIsLogin] = useState<boolean | undefined>();
  const { setUserState } = useUserMutators();
  const { setLoginPermissionState } = useLoginMutators();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        setUserState(user);
        setLoginPermissionState(true);
      } else {
        setIsLogin(false);
      }
    });
  }, [isLogin, setUserState, setLoginPermissionState]);

  return isLogin;
};
