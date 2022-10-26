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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import {Form} from '../components/Form';
// import ScreenA from '../components/ScreenA';
// import ScreenB from '../components/ScreenB';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const NavApp = () => {
  console.log('Nav');
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator
  //       screenOptions={{
  //         header: () => null,
  //       }}>
  //       <Stack.Screen name="ScreenA" component={ScreenA} />
  //       <Stack.Screen
  //         name="ScreenB"
  //         component={ScreenB}
  //         options={{
  //           header: () => null,
  //         }}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  //   return (
  //     <NavigationContainer>
  //       <Tab.Navigator
  //         screenOptions={({route}) => ({
  // tabBarIcon: ({focused, size, color}) => {
  //   let iconName;
  //   if (route.name === 'ScreenA') {
  //     iconName = 'alpha-a-circle';
  //     color = focused ? 'blue' : 'black';
  //   } else if (route.name === 'ScreenB') {
  //     color = focused ? 'blue' : 'black';
  //     iconName = 'alpha-b-circle';
  //   }
  //   return (
  //     <MaterialCommunityIcons name={iconName} size={25} color={color} />
  //   );
  //           },
  //           tabBarActiveTintColor: '#555',
  //           tabBarInactiveTintColor: '#f0f',
  //           tabBarActiveBackgroundColor: '#f0f',
  //           tabBarInactiveBackgroundColor: '#555',
  //           header: () => null,
  //         })}>
  //         <Tab.Screen
  //           name="ScreenA"
  //           component={ScreenA}
  //           options={{tabBarBadge: 3}}
  //         />
  //         <Tab.Screen name="ScreenB" component={ScreenB} />
  //       </Tab.Navigator>
  //     </NavigationContainer>
  //   );
  // };
  // return (
  //   <NavigationContainer>
  //     <Drawer.Navigator initialRouteName="Screen_A" drawerPosition="left">
  //       <Drawer.Screen
  //         name="ScreenA"
  //         component={ScreenA}
  //         // options={{tabBarBadge: 3}}
  //       />
  //       <Drawer.Screen name="ScreenB" component={ScreenB} />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});

export default NavApp;
