import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    let cuisines = [
      {id: 1, category: '',  name: 'ステーキ', price: 1000, content: '', pic: 'food_stake.png'},
      {id: 2, category: '', name: 'ピザ', price: 700, content: '', pic: 'pizza_margherita.png'},
      {id: 3, category: '', name: 'お子様ランチ', price: 600, content: '', pic: 'food_okosama_lunch.png'},
      {id: 4, category: '', name: 'マリトッツォ', price: 350, content: '', pic: 'sweets_maritozzo_ichigo.png'},
      {id: 5, category: '', name: '醤油ラーメン', price: 800, content: '', pic: 'ramen_top_syouyu.png'},
      {id: 6, category: '', name: '豚骨ラーメン', price: 850, content: '', pic: 'ramen_top_tonkotsu.png'},
      {id: 7, category: '', name: '和風定食', price: 900, content: '', pic: 'teisyoku_hiyayakko.png'},
    ]

    const alterCuisine = (cuisines) => {
      const dif = 3 - (cuisines.length)%3;
      let newcuisine = [];
      let subcuisine = [];
      let i = 0;

      for (let step = 0; step < dif; step++) cuisines.push({id: 0});
      for (const menu of cuisines){
        i++;
        if(menu.id==0) subcuisine.push({name : 'なし'});
        else subcuisine.push(menu);
        if(i==3){
          i=0;
          newcuisine.push(subcuisine);
          subcuisine = [];
        }
      }
      return newcuisine;
    }


    const menuClick = (cuisine) => {
      return (
        console.log(cuisine.name + 'を購入しました')
      );
    } 

    const newCuisines = alterCuisine(cuisines);
    const menu = newCuisines.map((cuisine) =>
    <div class="cuisine">
      <div key={cuisine[0].id} class="cuisine1">
        <h3>{cuisine[0].name}</h3>
        <img src={`${process.env.PUBLIC_URL}/${cuisine[0].pic}`} alt="" title="" />
        <p>{cuisine[0].price} 円</p>
        <p>{cuisine[0].content}</p>
        <button onClick={() => menuClick(cuisine[0])}>購入</button>
      </div>
      { 
        Object.keys(cuisine[1]).length != 1 ? (
        <div key={cuisine[1].id} class="cuisine2">
          <h3>{cuisine[1].name}</h3>
          <img src={`${process.env.PUBLIC_URL}/${cuisine[1].pic}`} alt="" title="" />
          <p>{cuisine[1].price} 円</p>
          <p>{cuisine[1].content}</p>
          <button onClick={() => menuClick(cuisine[1])}>購入</button>
        </div>
      ) : ( <div></div> )
      }
      { 
        Object.keys(cuisine[2]).length != 1 ? (
        <div key={cuisine[2].id} class="cuisine3">
          <h3>{cuisine[2].name}</h3>
          <img src={`${process.env.PUBLIC_URL}/${cuisine[2].pic}`} alt="" title="" />
          <p>{cuisine[2].price} 円</p>
          <p>{cuisine[2].content}</p>
          <button onClick={() => menuClick(cuisine[2])}>購入</button>
        </div>
      ) : ( <div></div> )
      }
    </div>
    );
    return (
        <div class="menu">
          {menu}
          {Object.keys(newCuisines[2][1]).length}
        </div>
    );
  }
}

export default App;
