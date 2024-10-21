import React from 'react';
import { Tabs } from 'expo-router';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HomeIcon = ({ focused, color }: { focused: boolean; color: string }) => {
  const iconName = focused ? 'home' : 'home-outline';
  return <MaterialCommunityIcons name={iconName} size={26} color={color} />;
};

const ShoppingIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => {
  const iconName = focused ? 'shopping' : 'shopping-outline';
  return <MaterialCommunityIcons name={iconName} size={26} color={color} />;
};

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ tabBarLabel: '홈', tabBarIcon: HomeIcon }}
      />
      <Tabs.Screen
        name="shopping"
        options={{ tabBarLabel: '쇼핑', tabBarIcon: ShoppingIcon }}
      />
    </Tabs>
  );
}
