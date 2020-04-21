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
      <button style={{display:inline-block}} onClick={darkMode.disable}><img src="/lampada.svg" style={{float:left, marginRight:0.5em}} /></button>    
      ) : (
      <button style={{display:inline-block}} onClick={darkMode.enable}><img src="/lampada.svg" style={{float:left, marginRight:0.5em}} /></button>
      )}
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  )
}

export default MyApp
