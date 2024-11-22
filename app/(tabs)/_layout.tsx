import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Bar Chart',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="bar-chart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Data Grid',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="line-chart" color={color} />,
        }}
      />
      <Tabs.Screen
        name='band'
        options={{
          title: 'Band',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="pie-chart" color={color} />,
        }}        
      />
      <Tabs.Screen
        name='gauge'
        options={{
          title: 'Gauge',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="bar-chart" color={color} />,
        }}      
      />
    </Tabs>
  );
}