import React, { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../theme'
import '../style.scss'

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme
 
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
    <div className="tema">
      {darkMode.value ? ( 
      <button className="lampada" onClick={darkMode.disable}><img src="/lampada.svg" /></button>    
      ) : (
      <button className="lampada" onClick={darkMode.enable}><img src="/lampada.svg" /></button>
      )}
      {isMounted && <Component {...pageProps} />}
    </div>
    </ThemeProvider>
  )
}

export default MyApp
