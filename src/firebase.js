import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDobEZ_eUqVpDFZCzBy5s6Hf_C9kfbT6m0",
  authDomain: "fifa-wc-bracket.firebaseapp.com",
  projectId: "fifa-wc-bracket",
  storageBucket: "fifa-wc-bracket.firebasestorage.app",
  messagingSenderId: "562182164476",
  appId: "1:562182164476:web:64ba120e8df8a4862b6c79",
};

export const app = initializeApp(firebaseConfig);
// Auto-detect long-polling: Firestore's default streaming (WebChannel)
// connection gets blocked by some corporate proxies/networks; this falls
// back automatically so the app still syncs on restrictive connections.
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});
