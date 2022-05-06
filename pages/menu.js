import image from 'next/image';
import Stripe from 'stripe';


import { useShoppingCart ,cartCount} from 'use-shopping-cart'
import * as React from "react"

export default function Menu() {
   

    const cuisines = [
        {id: 1, category: '',  name: 'ステーキ', price: 1000, content: '', pic: 'food_stake.png',url:'https://buy.stripe.com/test_6oEcQj3fJ68f7Ju6oq',price_id:'price_1KupKQKMUTyFBj1fQvNkAPq9'},
        {id: 2, category: '', name: 'ピザ', price: 700, content: '', pic: 'pizza_margherita.png',url:'https://buy.stripe.com/test_9AQcQj6rVbszbZK7sv',price_id:'price_1KupKwKMUTyFBj1frmjA2mua'},
        {id: 3, category: '', name: 'お子様ランチ', price: 600, content: '', pic: 'food_okosama_lunch.png',url:'https://buy.stripe.com/test_6oE3fJ3fJgMTfbW9AE',price_id:'price_1KupLdKMUTyFBj1f9ylm4OzW'},
        {id: 4, category: '', name: 'マリトッツォ', price: 350, content: '', pic: 'sweets_maritozzo_ichigo.png',url:'https://buy.stripe.com/test_eVabMf17B0NV5Bm3ch',price_id:'price_1KupMRKMUTyFBj1fTFto93Ff'},
        {id: 5, category: '', name: '醤油ラーメン', price: 800, content: '', pic: 'ramen_top_syouyu.png',url:'https://buy.stripe.com/test_3cs4jNaIbaovd3OdQW',price_id:'price_1KupN5KMUTyFBj1fzageak0Q'},
        {id: 6, category: '', name: '豚骨ラーメン', price: 850, content: '', pic: 'ramen_top_tonkotsu.png',url:'https://buy.stripe.com/test_4gwg2vbMffIP9RC9AH',price_id:'price_1KupNYKMUTyFBj1foFvwlLCp'},
      ];

      const { addItem } = useShoppingCart()
      const { formattedTotalPrice, cartDetails, decrementItem, incrementItem, removeItem, redirectToCheckout,clearCart } = useShoppingCart()
  
    
      const menuClick = (cuisine) => {
        window.open(cuisine.url, null, 'top=100, left=500, width=1000, height=800');
        return (
          console.log(cuisine.name + 'を購入しました')
        );
      } 
      const menuAdd = (cuisine)=>{
        addItem({
          name: cuisine.name,
          price_id:cuisine.price_id ,
          price: cuisine.price
        })
      }
  
      const menu = cuisines.map((cuisine) =>
        <div key={cuisine.id} class="cuisine">
          <h3>{cuisine.name}</h3>
          <img src={`/${cuisine.pic}`} alt="" title="" width={400} height={200}/>
          <p>{cuisine.price} 円</p>
          <p>{cuisine.content}</p>
          <button onClick={() => menuClick(cuisine)}>すぐに購入</button>
          <button onClick={() => menuAdd(cuisine)}>カートに追加します。</button>
         
          
          
        </div>
        
      );
    return (
     <main>
        <div class="menu">
        {menu}
        {console.log(cartDetails)}
        <ul>
          {Object.values(cartDetails).map((cart) => {
            return (
              <li key={cart.id}>

                {cart.name} - {cart.formattedPrice} * {cart.quantity} = {cart.formattedValue}
                <button onClick={() => decrementItem(cart.id)}>１つ減らす</button>
               <button onClick={() => incrementItem(cart.id)}>１つ増やす</button>
              <button onClick={() => removeItem(cart.id)}>削除</button>
              </li>
            )
          })}
          <li>合計: {formattedTotalPrice}</li>
        </ul>
        <button
                    variant='primary'
                    disabled={cartCount < 1}
                    onClick={async () => {
                        try {
                            const result = await redirectToCheckout()
                            if (result.error) throw new Error(result.error)
                        } catch (e) {
                            window.alert(e.message);
                        }
                    }}
                >
                    注文する
                </button>
                <button variant="outline-danger" onClick={() => clearCart()}>カートを空にする</button>
                
      </div>
      </main>
      
         
      );
   
  }
  