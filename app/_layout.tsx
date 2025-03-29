import React from 'react';
import "../global.css";
import { Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Ekran bileşenleri
import IndexScreen from './Index';
import CategoriesScreen from './Categories';
import MealsOverViewScreen from './MealsOverView';
import NotFoundScreen from './+not-found';
import MealDetailsScreen from './MealDetails';
import WelcomeScreen from './Welcome';

// ParamList Tanımları
export type RootStackParamList = {
  Home: undefined;
  Categories: undefined;
  MealsOverView: { categoryId: string };
  NotFound: { title: string };
  MealDetailsScreen: { mealId: string };
  Drawer: undefined;  // Drawer'ı burada tanımlamıyoruz
};

// Navigatör Tanımlamaları
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

// Bottom Tab Navigator
const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#25292e',
          borderTopWidth: 0
        },
        tabBarActiveTintColor: '#fafafa',
        tabBarInactiveTintColor: '#8e8e8e',
      }}
    >
      <BottomTabs.Screen
        name="Index"
        component={IndexScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

// Drawer Navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerStyle: { backgroundColor: '#25292e' },
        headerTintColor: '#fafafa',
        drawerLabel: 'Welcome Screen',
        drawerActiveBackgroundColor: '#25292e',
        drawerActiveTintColor: '#fafafa',
        drawerStyle: {
          backgroundColor: '#fafafa',
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
        },
      }}
    >
      <Drawer.Screen
        name="Index"
        component={BottomTabsNavigator} // BottomTabs'i burada Drawer içinde gösteriyoruz
        options={{
          drawerLabel: 'Index Page',
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          drawerLabel: 'Welcome Page',
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

// Main Root Layout
const RootLayout = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Drawer" // Ana başlangıç olarak Drawer'ı belirtiyoruz
        screenOptions={{
          headerStyle: { backgroundColor: '#25292e' },
          headerTintColor: '#fafafa',
          headerTitleAlign: 'center',
          contentStyle: {
            backgroundColor: '#25292e',
          },
        }}
      >
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }} // Drawer navigator'ı Stack içinde gizli tutuyoruz
        />
        <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
        <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
      <StatusBar barStyle="light-content" />
    </>
  );
};

export default RootLayout;
