import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
      headerTintColor: '#F97316',
      headerStyle: { backgroundColor: '#000000ff' },
      tabBarActiveTintColor: '#F97316', // Changed active tab color to orange
      tabBarInactiveTintColor: '#EAEAEA',
      tabBarStyle: {
        backgroundColor: '#000000ff',
        borderTopWidth: 0,
      }, 
      tabBarLabelStyle: { fontSize: 12 },
      tabBarIconStyle: { marginBottom: -3 },
      tabBarItemStyle: { paddingVertical: 5 },
      tabBarShowLabel: true,
      tabBarLabelPosition: 'below-icon',
      tabBarHideOnKeyboard: true,
      tabBarAccessibilityLabel: 'Main Navigation',
    }}>
      <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
      }}
      />
      <Tabs.Screen
      name="(tasks)/index"
      options={{
        title: 'Tasks',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="check-square-o" color={color} />,
      }}
      />
      <Tabs.Screen
      name="about"
      options={{
        title: 'About',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="info-circle" color={color} />,
      }}
      />
    </Tabs>
  );
}
