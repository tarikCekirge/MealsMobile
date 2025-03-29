import { View, Text, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MEALS } from '@/data/dummy-data';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/_layout';
import Container from '@/components/Container';
import MealDetails from '@/components/MealDetails';

type Props = {
    route: RouteProp<RootStackParamList, 'MealDetailsScreen'>;
    navigation: NativeStackNavigationProp<RootStackParamList, 'MealDetailsScreen'>;
};

const MealDetailsScreen = ({ route, navigation }: Props) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const { title = "Meal Not Found", imageUrl = "", ingredients = [] } = selectedMeal ?? {};

    useLayoutEffect(() => {
        navigation.setOptions({
            title
        });
    }, [title, navigation]);

    return (
        <Container>
            <Image source={{ uri: imageUrl }} style={{ width: '100%', height: 200 }} />
            <View>
                {selectedMeal && <MealDetails itemData={selectedMeal} />}
            </View>
        </Container>
    );
};

export default MealDetailsScreen;
