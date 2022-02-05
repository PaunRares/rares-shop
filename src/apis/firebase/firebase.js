import {initializeApp} from 'firebase/app';
import {FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth';
import firebaseConfig from '../../configs/firebase';

initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth();

export const logOut = function() {
    return signOut(auth);
}

export const signInWithGoogle = function() {
    return signInWithPopup(auth, googleProvider);
}
export const signInWithFacebook = function() {
    return signInWithPopup(auth, facebookProvider);
}