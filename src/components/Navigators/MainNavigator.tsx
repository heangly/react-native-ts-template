import { NavigationContainer } from '@react-navigation/native'
import NativeStackNavigator from './NativeStackNavigator'

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <NativeStackNavigator />
    </NavigationContainer>
  )
}

export default MainNavigator
