import React from 'react'

import { Home } from './src/screens/Home'

import {
  useFonts,
  Raleway_200ExtraLight,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_700Bold
} from '@expo-google-fonts/raleway'
import AppLoading from 'expo-app-loading'

import { ThemeProvider } from 'styled-components/native'

import { StatusBar } from 'expo-status-bar'
import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_200ExtraLight,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="light" />
      <Home />
    </ThemeProvider>
  )
}
