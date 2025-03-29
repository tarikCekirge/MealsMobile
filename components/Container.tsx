import { ScrollView, View } from 'react-native'
import React, { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <ScrollView className='flex-1 p-4'>
            {children}
        </ScrollView>
    )
}

export default Container