import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

const RootLayout = () => {
    return (
        <Tabs>
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