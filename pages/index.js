import Header from './header'
import Menu from './menu'
import {useHistory } from 'react-router-dom';
import auth from './firebase'

import FirebaseApp from './firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function Home() {

  const history = useHistory();
  const handleLogout = () => {
    auth.signOut();
    history.push('/login');
  };
  
  return (
    <div>
      
      <Header/>
      <button onClick={handleLogout}>ログアウト</button>
      <Menu/>
      
      
     
    </div>
    
  )
}


