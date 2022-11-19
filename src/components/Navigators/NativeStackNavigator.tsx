import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootNativeStackParamList } from '../../commons/types/NavigatorTypes'
import HomeScreen from '../../screens/MainScreens/HomeScreen'
import BottomTabNavigator from './BottomTabNavigator'

const NativeStack = createNativeStackNavigator<RootNativeStackParamList>()

const NativeStackNavigator = () => {
  return (
    <NativeStack.Navigator initialRouteName='BottomTabs'>
      <NativeStack.Screen
        name='BottomTabs'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </NativeStack.Navigator>
  )
}

export default NativeStackNavigator
