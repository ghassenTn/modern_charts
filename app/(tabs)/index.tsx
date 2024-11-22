import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from './settings';
import Analytics from '../analytics';
import Home from '../home';

const Drawer = createDrawerNavigator();

// Custom Drawer Header Component
const DrawerHeader = () => (
  <View style={styles.drawerHeader}>
    <Image
      source={require('../../assets/logo.png')} // Replace with your logo
      style={styles.logo}
    />
    <Text style={styles.brandName}>YourBrand</Text>
    <Text style={styles.tagline}>Making Your Life Easier</Text> {/* Add a tagline */}
  </View>
);

// Custom Drawer Footer
const DrawerFooter = () => (
  <View style={styles.drawerFooter}>
    <Text style={styles.footerText}>Version 1.0.0</Text>
  </View>
);

const HomeScreen = () => <Home/>;
const AnalyticsScreen = () => <Analytics />;
const SettingsScreen = () => <Settings />;

export default function App() {
  return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          drawerStyle: {
            backgroundColor: '#121212',
            width: 250,
          },
          drawerLabelStyle: {
            color: '#ffffff',
            fontSize: 16,
            fontWeight: '600',
            marginVertical: 5,
          },
          drawerActiveTintColor: '#3BE9DE',
          drawerInactiveTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#1f1f1f',
          },
          headerTitleStyle: {
            color: '#ffffff',
            fontWeight: 'bold',
          },
          headerTintColor: '#ffffff',
          drawerIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Analytics') iconName = 'chart-line';
            else if (route.name === 'Settings') iconName = 'cog';
            return <Icon name={iconName ?? 'default-icon'} size={size} color={color} />;
          },
        })}
        drawerContent={(props) => (
          <View style={{ flex: 1 }}>
            <DrawerHeader />
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <DrawerFooter />
          </View>
        )}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Analytics" component={AnalyticsScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
  );
}

// Styles
const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#1f1f1f',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 40, // Optional rounded corners for the logo
  },
  brandName: {
    color: '#3BE9DE',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tagline: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 5,
    fontStyle: 'italic',
  },
  drawerFooter: {
    backgroundColor: '#1f1f1f',
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  footerText: {
    color: '#555',
    fontSize: 12,
  },
});
