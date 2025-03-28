import React from 'react'
import { Tabs } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  return (
    // <Tabs screenOptions={{
    //     tabBarActiveTintColor: '#ffd33d',
    //     headerTitleAlign: "center",
    //     headerStyle: {
    //         backgroundColor: '#25292e',
    //     },
    //     headerShadowVisible: true,
    //     headerTintColor: '#fff',
    //     tabBarStyle: {
    //         backgroundColor: '#25292e',
    //         borderColor: '#5e728d'



    //     },
    // }}>
    //     <Tabs.Screen name="index" options={{
    //         title: 'Home'
    //     }} />
    //     <Tabs.Screen name='categories' options={{
    //         title: 'Categories'
    //     }} />
    // </Tabs>


    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>


    // <>
    //     <Stack>
    //         <Stack.Screen name="index" options={{ title: 'Home' }} />
    //         <Stack.Screen name="categories" options={{ title: 'Categories' }} />
    //     </Stack>
    // </>
  )
}

export default RootLayout