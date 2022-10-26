import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import Login from './screens/Login';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Screen_A"
        drawerPosition="left"
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor="#00000090"
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250,
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name="ScreenA"
          component={ScreenA}
          options={{
            title: 'Screen_A Title',
            drawerIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="alpha-a-circle"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            title: 'Screen_B Title',
            drawerIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="alpha-b-circle"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
          initialParams={{id: 1, name: 'from drawer'}}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            drawerIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="login"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});

export default AppDrawer;
