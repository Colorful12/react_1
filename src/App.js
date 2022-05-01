import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    const cuisines = [
      {id: 1, category: '',  name: 'ステーキ', price: 1000, content: '', pic: 'food_stake.png'},
      {id: 2, category: '', name: 'ピザ', price: 700, content: '', pic: 'pizza_margherita.png'},
      {id: 3, category: '', name: 'お子様ランチ', price: 600, content: '', pic: 'food_okosama_lunch.png'},
      {id: 4, category: '', name: 'マリトッツォ', price: 350, content: '', pic: 'sweets_maritozzo_ichigo.png'},
      {id: 5, category: '', name: '醤油ラーメン', price: 800, content: '', pic: 'ramen_top_syouyu.png'},
      {id: 6, category: '', name: '豚骨ラーメン', price: 850, content: '', pic: 'ramen_top_tonkotsu.png'},
    ];

    const menuClick = (cuisine) => {
      return (
        console.log(cuisine.name + 'を購入しました')
      );
    } 

    const menu = cuisines.map((cuisine) =>
      <div key={cuisine.id} class="cuisine">
        <h3>{cuisine.name}</h3>
        <img src={`${process.env.PUBLIC_URL}/${cuisine.pic}`} alt="" title="" />
        <p>{cuisine.price} 円</p>
        <p>{cuisine.content}</p>
        <button onClick={() => menuClick(cuisine)}>購入</button>
      </div>
    );
    return (
        <div class="menu">
          {menu}
        </div>
    );
  }
}

export default App;
