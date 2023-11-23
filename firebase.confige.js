import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const alldata = import.meta.env;
const firebaseConfig = {
  apiKey: alldata.VITE_APIKEY,
  authDomain: alldata.VITE_AUTHDOMAIN,
  projectId: alldata.VITE_PROJECTID,
  storageBucket: alldata.VITE_STORAGEBUCKET,
  messagingSenderId: alldata.VITE_MESSAGINGSENDERID,
  appId: alldata.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
