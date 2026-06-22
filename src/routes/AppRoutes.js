import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

import TabRoutes from './TabRoutes'

const Stack = createNativeStackNavigator()

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='Login'
          component={LoginScreen}
        />

        <Stack.Screen
          name='Register'
          component={RegisterScreen}
        />

        <Stack.Screen
          name='Home'
          component={TabRoutes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}