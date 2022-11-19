import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/MainScreens/HomeScreen'
import TodoScreen from '../../screens/MainScreens/TodoScreen'
import LogScreen from '../../screens/MainScreens/LogScreen'
import ProfileScreen from '../../screens/MainScreens/ProfileScreen'
import ChatScreen from '../../screens/MainScreens/ChatScreen'
import { RootBottomTabsParamList } from '../../commons/types/NavigatorTypes'

const BottomTabs = createBottomTabNavigator<RootBottomTabsParamList>()

const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator initialRouteName='Home'>
      <BottomTabs.Screen
        name='Log'
        component={LogScreen}
        options={{
          title: 'Log',
          tabBarLabel: 'Log'
        }}
      />

      <BottomTabs.Screen
        name='Todo'
        component={TodoScreen}
        options={{
          title: 'Todo',
          tabBarLabel: 'Todo'
        }}
      />

      <BottomTabs.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home'
        }}
      />

      <BottomTabs.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile'
        }}
      />

      <BottomTabs.Screen
        name='Chat'
        component={ChatScreen}
        options={{
          title: 'Chat',
          tabBarLabel: 'Chat'
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default BottomTabNavigator
