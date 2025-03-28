import Container from '@/components/Container';
import React from 'react';
import { View, Text } from 'react-native';

interface RouteParams {
    title: string;
}

interface NotFoundScreenProps {
    route: {
        params: RouteParams;
    };
}

const NotFoundScreen = ({ route }: NotFoundScreenProps) => {
    const { title } = route.params;

    return (
        <Container>
            <View className='flex-1 items-center justify-center'>
                <Text className='text-white text-lg'>{title}</Text>
            </View>
        </Container>
    );
};

export default NotFoundScreen;
