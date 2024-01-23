import React, {useEffect, useState} from 'react'
import { onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from '../firebase'
import AuthDetails from '../components/AuthDetails'
function HomeP() {
    const [authUser,setAuthUser] = useState(null)
    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
                
            }else{
                setAuthUser(null)
                window.location.href = `/login`
                
            }
        });
        return ()=>{
            listen()
        }
    },[])
    const userSignOut = () =>{
        signOut(auth).then(()=>{
            console.log("Sigin Out Successfully")
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='homepage'>
        <AuthDetails/>
        <button onClick={userSignOut}>LOG OUT</button>
    </div>
  )
}

export default HomeP