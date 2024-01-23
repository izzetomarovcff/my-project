import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
const SiginUp = () => {
    const [email,setEmail] = useState ("")
    const [password,setPassword] = useState ("")
    const signUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential)
            
            window.location.href = `/`
        }).catch((error)=>{
            console.log(error)
        })
    }
    const changeRoute = () =>{
        
        window.location.href = `/login`
    }
  return (
    <div className='sigin-in-container'>
        <form onSubmit={signUp}>
            <h1>Create Account</h1>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
            <button type="submit">Sigin Up</button>
            <button onClick={changeRoute}>Alredy Have Account</button>
        </form>
    </div>
  )
}

export default SiginUp