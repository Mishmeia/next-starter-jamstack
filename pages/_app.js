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
      <button onClick={darkMode.disable}><img src="https://iarloamavoces.netlify.app/lampada.svg" /></button>    
      ) : (
      <button onClick={darkMode.enable}><img src="https://iarloamavoces.netlify.app/lampada.svg" /></button>
      )}
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  )
}

export default MyApp
