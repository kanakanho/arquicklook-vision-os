'use client';

import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

export const loginState = atom({
  key: 'isLogin',
  default: false,
  dangerouslyAllowMutability: true,
});

export const useLoginState = () => {
  return useRecoilValue(loginState);
};

export const useLoginMutators = () => {
  const setLoginState = useSetRecoilState(loginState);

  const setLoginPermissionState = useCallback(
    (isLogin: boolean) => {
      setLoginState(isLogin);
    },
    [setLoginState],
  );

  return {
    setLoginPermissionState,
  };
};
