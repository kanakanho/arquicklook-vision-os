import { getAnalytics, isSupported } from 'firebase/analytics';
import { ReactNode } from 'react';
import { app } from '../utils/firebase';

const analyticsMock = {
  logEvent: () => {},
  setCurrentScreen: () => {},
  setUserId: () => {},
};

export async function getAnalyticsInstance() {
  const isAnalyticsSupported = await isSupported();
  return isAnalyticsSupported ? getAnalytics(app) : analyticsMock;
}

export default function FirebaseAnalyticsProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
