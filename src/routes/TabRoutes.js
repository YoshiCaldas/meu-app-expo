import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'
import FormScreen from '../screens/FormScreen'
import DietScreen from '../screens/DietScreen'
import ProgressScreen from '../screens/ProgressScreen'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1E293B',
          borderTopWidth: 0,
          height: 70,
        },
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#94A3B8',
      }}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='home'
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name='Treino'
        component={FormScreen}
        options={{
          title: 'Treino',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='barbell'
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name='Dieta'
        component={DietScreen}
        options={{
          title: 'Dieta',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='restaurant'
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name='Evolução'
        component={ProgressScreen}
        options={{
          title: 'Progresso',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='stats-chart'
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='person'
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          title: 'Config',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='settings'
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}