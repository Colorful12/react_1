 import '../styles/globals.css'
 import { CartProvider } from 'use-shopping-cart'
 

function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
return (
 
     <CartProvider
       mode={"payment"}
       cartMode={"client-only"}
       stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
       successUrl={'http://localhost:3000/'}
       cancelUrl={'http://localhost:3000'}
       currency={'jpy'}
     >
       <Component {...pageProps} />
     </CartProvider>
     
   )
}

export default MyApp


// '78a2974c-77ac-4caa-81d4-6d5e6881c5b1'
// 'aedda574-ec31-44fa-a621-db7edefe395e'