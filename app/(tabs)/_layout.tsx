import React from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './Index';
import CategoriesScreen from './Categories';
import MealsOverViewScreen from './MealsOverView';

const Stack = createNativeStackNavigator();

const RootLayout = () => {
    return (
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
                    headerRight: () => (<Button title="asd" onPress={() => { }} />)
                }}
            />
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} options={{ title: 'Meals OverView' }} />
        </Stack.Navigator>
    );
}

export default RootLayout;
