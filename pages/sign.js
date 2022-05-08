import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthProvider } from './context/AuthContext';
import { useAuthContext } from './context/AuthContext';
import Header from './header'
import { useState } from 'react';

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email, password);

   
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        createUserWithEmailAndPassword(auth,email.value, password.value) .then(( userCredential) => {
          console.log('user created');
          console.log(userCredential);
          alert('登録しました')
          window.open('http://localhost:3000/login')
        })
        .catch((error) => {
          alert(error.message)
          console.error(error)
        }); 
    };
    const handleChangeEmail = (event) => {
      setEmail(event.currentTarget.value);
    };
    const handleChangePassword = (event) => {
      setPassword(event.currentTarget.value);
    };

    
    

    return (
        
         <div style={{ margin: '2em' }}>
          <Header/>

         <h1>ユーザ登録</h1>
         <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" onChange={(event)=>handleChangeEmail(event)}/>
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder='password' onChange={(event)=>handleChangePassword(event)} />
        </div>
        <div>
          <button>登録</button>
        </div>
        <div>
          <u><a href= "http://localhost:3000/login" >ログイン画面へ</a></u>
        </div>
      </form>
      </div>
     
      )
    }