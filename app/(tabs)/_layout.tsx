import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#D17842',
        tabBarInactiveTintColor: '#4E5053',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#0C0F14',
          borderColor: '#0C0F14',
          borderTopWidth: 0
        }
      }}
      >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => <MaterialIcons name="home" size={28} color={focused ? '#D17842' : '#4E5053'} />,
        }}
       />
      <Tabs.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ focused }) => <MaterialIcons name="shopping-bag" size={24} color={focused ? '#D17842' : '#4E5053'} />
        }}
         />
      <Tabs.Screen
        name="Favourites"
        options={{
          tabBarIcon: ({ focused }) => <Fontisto name="heart" size={20} color={focused ? '#D17842' : '#4E5053'} />
        }}
       />
      <Tabs.Screen
        name="Notification"
        options={{
          tabBarIcon: ({ focused }) => <MaterialIcons name="notifications" size={28} color={focused ? '#D17842' : '#4E5053'} />
        }}
       />
    </Tabs>
  )
}

export default AppLayout