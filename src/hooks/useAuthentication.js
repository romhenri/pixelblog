import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
 } from 'firebase/auth';
import firebase from 'firebase';

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  firebase.initializeApp(config);
  var db = firebase.firestore();

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth()

  function checkIfIsCanceled() {
    if (cancelled) {
      return
    }
  }

  const createUser = async (data) => {
    checkIfIsCanceled()

    setLoading(true)

    try{

      const {user} = createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )

      await updateProfile(user, {
        displayName: data.displayName
      })

    } catch (error) {

      console.log(error.message);
      console.log(typeof error.message);
    }

    setLoading(false)
  }

  useEffect(() => {
    return () => setCancelled(true)
  })

  return {
    auth,
    createUser,
    error,
    loading
  }
}