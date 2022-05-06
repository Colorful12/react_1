import React from 'react';

class Head extends React.Component {
    render() {
        return (
            <header>
                <div class="main_img">
                    <img src="mainpic.png"></img>
                </div>
                <div class="shopname">
                    React Practice
                </div>
                <div class="inner_nav">
                    <a href="" class="tel">お問い合わせ</a>
                    <a href="" class="acs">アクセス</a>
                </div>
            </header>
        );
    }
}

export default Head;
