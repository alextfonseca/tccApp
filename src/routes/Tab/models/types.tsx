import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type propsNavigationStack = {
  Home: undefined
  Locations: undefined
  QrCodeReader: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
