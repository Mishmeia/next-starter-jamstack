import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
  <div>
    <Head>
      <title>❤️</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Next.js on the [JAMstack](https://jamstack.org)</h1>
   
    <h3>Hooray 🎉 - you've built this with <a href="https://nextjs.org">Next.js</a>!</h3>

    <ul>
      <li><Link href="/angel"><a>Angel, toque aqui. ❤️</a></li>
      <li><Link href="/gabriella"><a>Gabriella, toque aqui. ❤️</a></li>
    </ul>
  
    <script jsx>
  
  </script>
    <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </div>
)

export default Home
