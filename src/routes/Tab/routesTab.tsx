import * as React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { propsNavigationStack } from '../tab/models/types'
import { Home } from '../../screens/Home'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { Locations } from '../../screens/Locations'
import { QrCodeReader } from '../../screens/QrCodeReader'

const { Navigator, Screen } = createBottomTabNavigator<propsNavigationStack>()

export default function Tab() {
  return (
    <Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#2A6100',
        tabBarInactiveTintColor: '#495057',
        headerShown: false
      })}
      initialRouteName="Home"
    >
      {/* tela inicial */}
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          )
        }}
      />

      {/* tela de leitura do qrCode */}
      <Screen
        name="QrCodeReader"
        component={QrCodeReader}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="qrcode" size={size} color={color} />
          )
        }}
      />

      {/* tela de locais */}
      <Screen
        name="Locations"
        component={Locations}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="map-pin" size={size} color={color} />
          )
        }}
      />
    </Navigator>
  )
}
