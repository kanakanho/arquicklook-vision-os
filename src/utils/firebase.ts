'use client';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDwSjc4ZyHooHRagdCQ_s0mcYgQDXjIG5I',
  authDomain: 'arquicklook-vision-os.firebaseapp.com',
  projectId: 'arquicklook-vision-os',
  storageBucket: 'arquicklook-vision-os.appspot.com',
  messagingSenderId: '631822001502',
  appId: '1:631822001502:web:2510388015cb879fff1bcf',
  measurementId: 'G-DYMVBJP8Y1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
