import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
const SignIn = () => {
    const [email,setEmail] = useState ("")
    const [password,setPassword] = useState ("")
    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential)
            window.location.href = "http://localhost:3000/"
        }).catch((error)=>{
            console.log(error)
        })
    }
    const changeRoute = () =>{
        let urlArr = window.location.href.split("/")
        window.location.href = `${urlArr[0]}/signup`
    }
  return (
    <div className='sigin-in-container'>
        <form onSubmit={signIn}>
            <h1>Log In To Your Account</h1>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
            <button type="submit">Log In</button>
            <button onClick={changeRoute}>Create Account</button>
        </form>
    </div>
  )
}

export default SignIn