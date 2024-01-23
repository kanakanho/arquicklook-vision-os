'use client';

import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useUserMutators } from '../state/firebaseUserState';
import { useLoginMutators } from '../state/login';
import { auth } from './firebase';

export const googleLogin = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider).catch((error) => {
    console.error(error);
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
    (async () => {
      const auth = getAuth();
      try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setIsLogin(true);
            setUserState(user);
            setLoginPermissionState(true);
          } else {
            setIsLogin(false);
          }
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, [isLogin, setUserState, setLoginPermissionState]);

  return isLogin;
};
