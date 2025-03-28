import { View } from 'react-native'
import React, { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <View className='flex-1 p-4'>
            {children}
        </View>
    )
}

export default Container