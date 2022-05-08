import { auth } from './firebase';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Header from './header'

const Login = () => {
const handleSubmit = (event) => {
  event.preventDefault();

  const { email, password } = event.target.elements;


  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((user) => {
    console.log('ログイン成功=', user.user.uid);
    window.open('http://localhost:3000/')
  })
  .catch((error) => {
    console.error(error)
    alert('パスワードまたはメールアドレスが違います。')
  })    
  
   
  };

  return (
    <div>
      <Header/>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>

        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザ登録は<u><a href= "http://localhost:3000/sign" >こちら</a></u>から
        </div>
      </form>
    </div>
  );
};

export default Login;