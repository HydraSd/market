import React from 'react';
import { signInWithPopup, GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../../../firbase';
import GoogleLoginBtn from '@/Components/GoogleLoginBtn';


function LoginPage() {
  
  // console.log(auth)
  return (
    <div className='flex items-center justify-center'>
      <GoogleLoginBtn />
    </div>
  )
}

export default LoginPage