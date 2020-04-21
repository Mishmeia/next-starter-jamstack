import React, { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../theme'
import estilo from './style.scss'

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme
 
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
    <div className={estilo.tema}>
      {darkMode.value ? ( 
      <button className={estilo.lampada} onClick={darkMode.disable}><img src="/lampada.svg" /></button>    
      ) : (
      <button className={estilo.lampada} onClick={darkMode.enable}><img src="/lampada.svg" /></button>
      )}
      {isMounted && <Component {...pageProps} />}
    </div>
    </ThemeProvider>
  )
}

export default MyApp
