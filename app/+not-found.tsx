import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const NotFoundScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
            <View className='flex-1'>
                <Link href="/(tabs)/index">
                    Go back to Home screen!
                </Link>
            </View>
        </>
    )
}

export default NotFoundScreen