import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>食堂予約システム</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
      </Head>

      <main className={styles.main}>
      <div className='container2'>
      
      <a href="https://buy.stripe.com/test_5kAcQj2bFeELaVGfYZ">
        <button type="submit" role="link" className="btn btn-primary">
                カレー
          </button></a>

        <br>
        </br>

        
        <a href="https://buy.stripe.com/test_fZe03x2bF7cjaVGbII">
        <button type="submit" role="link" className="btn btn-primary">
              ラーメン
          </button></a>
      
      <br></br>
      <form>
+    <select id="stripe_select_box">
+        <option value='price_1KuBesKMUTyFBj1fNYr778ob'> ラーメン</option>
+        <option value='price_1Ku9J4KMUTyFBj1f8mL05ZCO'>カレー</option>
+    </select>
+ </form>

<br></br>
<br></br>
<form action="/api/checkout_sessions" method="POST">
        <section>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
</form>


      </div>
      </main>

      
     
    </div>
    
  )
}

export default Home
