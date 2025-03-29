import React from 'react';
import "../global.css";
import { Button, StatusBar, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './Index';
import CategoriesScreen from './Categories';
import MealsOverViewScreen from './MealsOverView';
import NotFoundScreen from './+not-found';
import MealDetailsScreen from './MealDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './Favorites';
import IconButton from '@/components/IconButton';
import { Ionicons } from '@expo/vector-icons';

export type RootStackParamList = {
  Home: undefined;
  Categories: undefined;
  DrawerScreen: undefined;
  Favorites: undefined;
  MealsOverView: { categoryId: string };
  NotFound: { title: string };
  MealDetailsScreen: { mealId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();



const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#25292e' },
      headerTintColor: '#fafafa',
      headerTitleAlign: 'center',
      sceneStyle: {
        backgroundColor: '#25292e',
      },
      drawerContentStyle: {
        backgroundColor: '#25292e',
      },
      drawerInactiveTintColor: '#fafafa',
      drawerActiveTintColor: '#fafafa',
      drawerActiveBackgroundColor: '#293441'
    }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />
      }} />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{
        drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
      }} />
    </Drawer.Navigator>
  )
}



const RootLayout = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="DrawerScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#25292e' },
          headerTintColor: '#fafafa',
          headerTitleAlign: 'center',
          contentStyle: {
            backgroundColor: '#25292e',
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={IndexScreen}
          options={{
            title: 'Home',
            headerRight: () => (<Button title="btn" onPress={() => { }} />)
          }}
        />
        <Stack.Screen name="DrawerScreen" component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MealsOverView" component={MealsOverViewScreen}

        />
        <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />

      </Stack.Navigator>
      <StatusBar barStyle="light-content" className="bg-[#25292e]" />

    </>
  );
}

export default RootLayout;
