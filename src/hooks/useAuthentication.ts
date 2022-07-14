
import 'firebase/auth';
import 'firebase/firestore';
import { useRouter } from 'vue-router';
import { useFirebase } from './useFirebase';
export const useAuthentication = () => {
    const router = useRouter()
    const { loginUser, register, loginWithGoogle } = useFirebase()

    const login = async (email,password) => {
        loginUser(email,password)
    }

    const registerUser = async (email,password) => {
       register(email, password)
    }

    const loginWithGoogleUser = async () => {
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
        registerUser,
        loginWithGoogleUser
    }
}