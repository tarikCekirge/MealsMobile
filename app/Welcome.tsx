import { View, Text, Button } from 'react-native'
import React from 'react'
import Container from '@/components/Container'
import { RouteProp } from '@react-navigation/native';


const WelcomeScreen = ({ route, navigation }: { route: RouteProp<any, any>; navigation: any }) => {
    const openDrawerHandler = () => {
        navigation.toggleDrawer()
    }
    return (
        <Container>
            <View>
                <Text>Welcome Drawer</Text>
                <Button title='Open Drawer' onPress={openDrawerHandler} />
            </View>
        </Container>
    )
}

export default WelcomeScreen