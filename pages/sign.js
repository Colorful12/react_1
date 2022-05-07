import { auth } from './firebase';
import { AuthProvider } from './context/AuthContext';
import { useAuthContext } from './context/AuthContext';

export default function SignUp() {

    

    const   user = useAuthContext();
    // {user}
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        auth.createUserWithEmailAndPassword(email.value, password.value);
    };
    
    

    return (
        
         <div style={{ margin: '2em' }}>
         <h1>ユーザ登録</h1>
         <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
      </div>
     
      )
    }