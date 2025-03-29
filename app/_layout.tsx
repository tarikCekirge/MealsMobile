import React from 'react';
import "../global.css";
import { Button, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './Index';
import CategoriesScreen from './Categories';
import MealsOverViewScreen from './MealsOverView';
import NotFoundScreen from './+not-found';
import MealDetailsScreen from './MealDetails';

export type RootStackParamList = {
  Home: undefined;
  Categories: undefined;
  MealsOverView: { categoryId: string };
  NotFound: { title: string };
  MealDetailsScreen: { mealId: string };
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const RootLayout = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Categories"
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
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'All Categories' }} />
        <Stack.Screen name="MealsOverView" component={MealsOverViewScreen}
        // options={({ route, navigation }) => {
        //   const catId = route.params.categoryId;
        //   return {
        //     title: catId,

        //   }
        // }}

        />
        <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />

      </Stack.Navigator>
      <StatusBar barStyle="light-content" className="bg-[#25292e]" />
    </>
  );
}

export default RootLayout;
