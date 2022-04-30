import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    const cuisines = [
      {id: 1, category: '',  name: 'ステーキ', price: 1000, content: '', pic: '../public/'},
      {id: 2, category: '', name: 'ピザ', price: 700, content: '', pic: '../public/'},
      {id: 3, category: '', name: 'お子様ランチ', price: 600, content: '', pic: '../public/'},
      {id: 4, category: '', name: 'マリトッツォ', price: 350, content: '', pic: '../public/'},
      {id: 5, category: '', name: '醤油ラーメン', price: 800, content: '', pic: '../public/'},
      {id: 6, category: '', name: '豚骨ラーメン', price: 850, content: '', pic: '../public/'},
    ];

    const menu = cuisines.map((cuisine) =>
    <div key={cuisine.id}>
      <h3>{cuisine.name}</h3>
      写真をいれる
      <p>{cuisine.price} 円</p>
      <p>{cuisine.content}</p>
    </div>
    );
    return (
        <div>
          {menu}
        </div>
    );
  }
}

export default App;
