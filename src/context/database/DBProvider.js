import React, { useState } from 'react';
import databaseContext from './databaseContext';
import { db } from '../../firebaseConfig'
import { addDoc, collection, query, limit, getDocs, setDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';


const DBProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);

    const resetState = () => {
        setIsLoading(false);
        setError('');
        setIsCompleted(false);
    }

    const prepareState = () => {
        setIsLoading(true);
        setError('');
        setIsCompleted(false);

    }

    const addDocument = async (collectionName, value) => {
        console.log("addDocument ~ value", value)
        await addDoc(collection(db, collectionName), value)
        // await db.collection(collectionName).add(value)
    }
    // const addTechDoc = async (collectionName, value) => {
    //     console.log("addDocument ~ value", value)
    //     await addDoc(collection(db,'tech',doc(db, collectionName, 'tech')), value)
    //     listCollections()
    // }

    const getDocsLimit = async (collectionID, numLimit) => {
        prepareState()
        const collectionRef = collection(db, collectionID)
        const q = query(collectionRef, limit(numLimit))
        let data
        try {
            const querySnapshot = await getDocs(q)
            data = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
        setIsCompleted(true)
        return data
    }

    const getQueryDocs = async (collectionID, rule) => {
        prepareState()
        const collectionRef = collection(db, collectionID)
        const q = query(collectionRef, rule)
        let data
        try {
            const querySnapshot = await getDocs(q)
            data = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
        setIsCompleted(true)
        return data
    }

    const getAllDocs = async (collectionID) => {
        prepareState()
        const collectionRef = collection(db, collectionID)
        let data
        try {
            const querySnapshot = await getDocs(collectionRef)
            data = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
        setIsCompleted(true)
        return data
    }

    const setDocument = async (collectionID, docID, value) => {
        prepareState()
        const docRef = doc(db, collectionID, docID)
        try {
            await setDoc(docRef, value)
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
        setIsCompleted(true)
    }

    const getDocument = async (collectionID, docID) => {
        prepareState()
        let data
        const docRef = doc(db, collectionID, docID)
        try {
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()) data = {...docSnap.data()}
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
        setIsCompleted(true)
        return data
    }

    const updateDocument = async (collectionID, docID, value) => {
        prepareState()
        const docRef = doc(db, collectionID, docID)
        try {
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()) await updateDoc(docRef, value)
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
        setIsCompleted(true)
    }

    const addDocArray = async (collectionID, docID, value) => {
    console.log("addDocArray ~ docID", docID)
    console.log("addDocArray ~ collectionID", collectionID)
        let isSuccess = true
        prepareState()
        const docRef = doc(db, collectionID, docID)
        try {
            console.log(1);

            const docSnap = await getDoc(docRef)
            if(!docSnap.exists()){
            console.log(123);

                setDoc(docRef, {
                    orderList: []
                })
            }

            updateDoc(docRef, {
                orderList: arrayUnion(value)
            })
            console.log(46);
        } catch (error) {
            setError(error.message)
            isSuccess = false
        }
        setIsLoading(false)
        setIsCompleted(true)
        return isSuccess
    }

    const removeDocArray = async (collectionID, docID, value) => {
        const docRef = doc(db, collectionID, docID)
        prepareState()
        try {
            await updateDoc(docRef, {
                orderList: arrayRemove(value)
            })
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
        setIsCompleted(true)
    }

    const dbContextValue = {
        resetState,
        addDocument,
        isLoading,
        error,
        isCompleted,
        getDocsLimit,
        getQueryDocs,
        getAllDocs,
        setDocument,
        getDocument,
        updateDocument,
        addDocArray,
        removeDocArray,
    }

    return (
        <databaseContext.Provider value={dbContextValue}>
            {children}
        </databaseContext.Provider>
    );
}

export default DBProvider;
