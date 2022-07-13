import {firebase, auth} from '../firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { useRouter } from 'vue-router';
import { useFirebase } from './useFirebase';
export const useAuthentication = () => {
    const router = useRouter()
    const { loginUser } = useFirebase()

    const login = async (values) => {
        loginUser(values)
    }

    const register = async (email,password) => {
       register(email, password)
    }

    const loginWithGoogle = async () => {
        loginWithGoogle()
    }

    const loginWithSMS = async () => {
        console.log('login');
    }

    return {
        login,
        loginUser,
        loginWithGoogle,
        register,
    }
}