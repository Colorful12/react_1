import Header from './header'
import Menu from './menu'
import {useHistory } from 'react-router-dom';


import FirebaseApp from './firebase'
import { getAuth, signOut } from "firebase/auth";

export default function Home() {

  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth).then(() => {
      window.open(" http://localhost:3000/login")
    })
    
  };
  
  return (
    <div>
      
      <Header/>
      <button onClick={handleLogout}>ログアウト</button>
      <Menu/>
      
      
     
    </div>
    
  )
}


