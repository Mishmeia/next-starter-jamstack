import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const TemaTeste = styled.section`
  height: 100vh;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.fontColor};
`;
const Gabriella = () => (
  <div>
    <Head>
      <title>Para Gabriella ❤️</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <TemaTeste>
      <h1>Para Gabriella ❤️:</h1>
    </TemaTeste>
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
      .topo {
        height: 100vh;
      }
    `}</style>
  </div>
)

export default Gabriella
