import React, { useEffect, useState } from 'react';
import { useDatabase } from '../database/databaseContext';
import authContext from './authContext';
import { auth } from '../../firebaseConfig';
import { useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const history = useHistory()
    const { getDocument, setDocument, isLoading: isDBLoading, error: dbError, isCompleted: isDBCompleted, resetState: resetDBState } = useDatabase()
    const [currentUser, setCurrentUser] = useState();
    console.log("AuthProvider ~ currentUser", currentUser)
    const [isChecking, setIsChecking] = useState(true);
    const [profile, setProfile] = useState({});
    console.log("AuthProvider ~ profile", profile)
    const [isInitProfile, setIsInitProfile] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setIsChecking(false)
        })
        return unsubscribe
    }, [])

    useEffect(() => {
        const initProfile = async () => {
            const profileRes = await getDocument('profiles', currentUser.uid)
            console.log("initProfile ~ profileRes", profileRes)
            setProfile(profileRes)
        }
        currentUser && initProfile()
    }, [currentUser])

    useEffect(() => {
        const setProfile = async () => {
            await setDocument('profiles', currentUser.uid, { uid: currentUser.uid, ...profile })
            isInitProfile && resetDBState()
            setIsInitProfile(false)
        }
        currentUser && setProfile()
    }, [profile])

    const prepareState = () => {
        setIsLoading(true)
        setError('')
        setIsCompleted(false)
    }

    const resetState = () => {
        setIsLoading(false)
        setError('')
        setIsCompleted(false)
        resetDBState()
    }

    const signup = async (email, password) => {
        prepareState()
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            history.push('/')
            return res
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)

    }

    const login = async (email, password) => {
        prepareState()
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            history.push('/')
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    }

    const logout = async () => {

        setIsLoading(true)
        setError('')
        try {
            const res = await signOut(auth)
            console.log("logout ~ res", res)
            history.push('/')
        } catch (error) {
            console.log("signup ~ error", error.code)
            setError(error.message)
        }
        setIsLoading(false)
    }

    const changeProfile = (profile) => {
        setProfile(profile)
    }

    const changePassword = async (password) => {
        prepareState()
        try {
            await updatePassword(currentUser, password)
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
        setIsCompleted(true)
    }

    const authContextValue = {
        resetState,
        currentUser,
        isChecking,
        profile,
        isLoading: isLoading,
        isDBLoading: isDBLoading,
        error: error,
        dbError: dbError,
        isCompleted: isCompleted,
        isDBCompleted: isDBCompleted,
        signup,
        login,
        logout,
        changeProfile,
        changePassword,
    }

    return (
        <authContext.Provider value={authContextValue}>
            {children}
        </authContext.Provider>
    );
}

export default AuthProvider;
