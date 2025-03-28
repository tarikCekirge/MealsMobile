import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const NotFoundScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
            <View className='flex-1'>
                <Text>Go back to Home screen!</Text>
            </View>
        </>
    )
}

export default NotFoundScreen