import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Stack from './stack/routestStack'

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  )
}
