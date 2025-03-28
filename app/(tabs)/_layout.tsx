import React from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './index';
import CategoriesScreen from './categories';

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
                component={Index}
                options={{
                    title: 'Home',
                    headerRight: () => (<Button title="asd" onPress={() => { }} />)
                }}
            />
            <Stack.Screen name="Categories" component={CategoriesScreen} />
        </Stack.Navigator>
    );
}

export default RootLayout;
