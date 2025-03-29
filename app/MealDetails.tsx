import { View, Text } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/_layout';
import Container from '@/components/Container';

type Props = {
    route: RouteProp<RootStackParamList, 'MealDetailsScreen'>;
    navigation: NativeStackNavigationProp<RootStackParamList, 'MealDetailsScreen'>;
};

const MealDetailsScreen = ({ route, navigation }: Props) => {

    const mealId = route.params.mealId;
    return (
        <Container>
            <View>
                <Text>MealDetailsScreen (MEAL ID: {mealId})</Text>
            </View>
        </Container>
    );
};

export default MealDetailsScreen;
