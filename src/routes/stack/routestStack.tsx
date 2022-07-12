import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { propsNavigationStack } from './models/types'
import { Start } from '../../screens/Start'

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function Stack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Start"
    >
      {/* tela inicial */}
      <Screen name="Start" component={Start} />
    </Navigator>
  )
}
