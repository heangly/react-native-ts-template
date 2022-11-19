import { NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootNativeStackParamList = {
  BottomTabs: undefined
  Home: undefined
}

export type RootBottomTabsParamList = {
  Home: undefined
  Todo: undefined
  Log: undefined
  Profile: undefined
  Chat: undefined
}

export type RootNativeNavigationProp =
  NativeStackNavigationProp<RootNativeStackParamList>
