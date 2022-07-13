import {firebase, auth} from '../firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { useRouter } from 'vue-router';
export const useAuthentication = () => {
    const router = useRouter()
    const loginUser = async (email, password) => {
         await firebase
        .auth()
        .signInWithEmailAndPassword(email, password) // THIS LINE CHANGED
        .then((data) => {
            console.log('Successfully logged in!', email, password);
            router.push('/dashboard') // redirect to the feed
        })
        .catch(error => {
            console.log(error.code)
            alert(error.message);
        });
    }

    const register = async (email,password) => {
       await  firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email, password) // need .value because ref()
      .then((data) => {
        console.log('Successfully registered!');
        router.push('/dasboard') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
    }

    const loginWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider)
    }

    const loginWithSMS = async () => {
        console.log('login');
    }

    return {
        loginUser,
        loginWithGoogle,
        register
    }
}