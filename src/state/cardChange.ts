'use client';

import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

export const isCardChangeState = atom({
  key: 'isCardChange',
  default: false,
  dangerouslyAllowMutability: true,
});

export const useIsCardChangeState = () => {
  return useRecoilValue(isCardChangeState);
};

export const useIsCardChangeMutators = () => {
  const setIsCardChangeState = useSetRecoilState(isCardChangeState);

  const setIsCardChangePermissionState = useCallback(
    (isIsCardChange: boolean) => {
      setIsCardChangeState(isIsCardChange);
    },
    [setIsCardChangeState],
  );

  return {
    setIsCardChangePermissionState,
  };
};
