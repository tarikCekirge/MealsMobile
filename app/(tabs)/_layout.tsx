import React from 'react'
import { Stack, Tabs } from 'expo-router'

const RootLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: '#25292e',
            },
            headerShadowVisible: true,
            headerTintColor: '#fff',
            tabBarStyle: {
                backgroundColor: '#25292e',
                borderColor: '#5e728d'



            },
        }}>
            <Tabs.Screen name="index" options={{
                title: 'Home'
            }} />
            <Tabs.Screen name='categories' options={{
                title: 'Categories'
            }} />
        </Tabs>

        // <>
        //     <Stack>
        //         <Stack.Screen name="index" options={{ title: 'Home' }} />
        //         <Stack.Screen name="categories" options={{ title: 'Categories' }} />
        //     </Stack>
        // </>
    )
}

export default RootLayout