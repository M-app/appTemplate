import {firebase, auth} from '../firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import * as Yup from "yup";

export const useFirebase = () => {
    const store = useStore()
    const router = useRouter()

    

    const loginUser = async (values) => {
         await firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password) // THIS LINE CHANGED
        .then((data) => {
            console.log('Successfully logged in!', values.email, values.password);
            router.push('/builder'); // redirect to the feed
            
        })
        await store.dispatch(Actions.LOGIN, values)
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
        router.push('/profile') // redirect to the feed
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
        register,
    }
}