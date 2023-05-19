"use client"
import React from 'react'
import { signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { auth, provider } from '../../firbase';
import GoogleIcon from '@mui/icons-material/Google';


const googleHandler = async () => {

    provider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
           
            // redux action? --> dispatch({ type: SET_USER, user });
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
  };
  

function GoogleLoginBtn() {
  return (
    <div className='w-[200px] flex justify-center cursor-pointer p-5 bg-blue-500 rounded-xl hover:scale-105 duration-100 ease-out' onClick={googleHandler}>
        <GoogleIcon sx={{color:"white"}}/>
        <h1 className='font-semibold pl-3 text-white'>Google</h1>
    </div>
  )
}

export default GoogleLoginBtn