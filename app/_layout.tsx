import React from 'react';
import "../global.css";
import { Button, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './Index';
import CategoriesScreen from './Categories';
import MealsOverViewScreen from './MealsOverView';

type RootStackParamList = {
  Home: undefined;
  Categories: undefined;
  MealsOverView: { categoryId: string };
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const RootLayout = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: { backgroundColor: '#25292e' },
          headerTintColor: '#fafafa'
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
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} options={{ title: 'Meals OverView' }} />
      </Stack.Navigator>
      <StatusBar barStyle="light-content" className="bg-[#25292e]" />
    </>
  );
}

export default RootLayout;
