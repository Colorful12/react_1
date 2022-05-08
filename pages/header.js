import React from 'react';
import { getAuth, signOut } from "firebase/auth";

class Head extends React.Component {
    render() {
        const auth = getAuth();
        const handleLogout = () => {
            signOut(auth).then(() => {
            window.open(" http://localhost:3000/login")
            })
        };
        return (
            <header>
                <div class="main_img">
                    <img src="mainpic.png"></img>
                </div>
                <div class="shopname">
                    React Practice
                </div>
                <div class="inner_nav">
                    <button onClick={handleLogout}>ログアウト</button>
                    <a href="" class="tel">お問い合わせ</a>
                    <a href="" class="acs">アクセス</a>
                </div>
            </header>
        );
    }
}

export default Head;
