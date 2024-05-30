import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon, TabBarIcon2 } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
            name="account"
            options={{
                title: 'Account',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon2 name={focused ? 'account' : 'account'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="stats"
            options={{
                title: 'Stats',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'stats-chart' : 'stats-chart-outline'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="news"
            options={{
                title: 'News',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'newspaper' : 'newspaper-outline'} color={color} />
                ),
            }}
        />
    </Tabs>
  );
}
