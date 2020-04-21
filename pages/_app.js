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
      {estaPreto(theme) ? ( 
      <button onClick={darkMode.enable}>DARK MODE</button>
      ) : (
      <button onClick={darkMode.disable}>LIGHT MODE</button>
      )
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  )
}

estaPreto = (tema) => {
  if(tema == 'darkTheme') {
    const otemaepreto = true;
  } else {
    const otemaepreto = false;
  }
  return otemaepreto
}

export default MyApp
