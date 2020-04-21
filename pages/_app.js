import React, { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../theme'

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme
 
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {darkMode.value ? ( 
      <button className="lampada" onClick={darkMode.disable}><img src="/lampada.svg" /></button>    
      ) : (
      <button className="lampada" onClick={darkMode.enable}><img src="/lampada.svg" /></button>
      )}
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
       
        <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      .lampada {
        position: fixed;
        bottom: 0;
        right: 0;
      }
    `}</style>
  )
}

export default MyApp
