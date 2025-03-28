import { MEALS } from '@/data/dummy-data';
import { View, FlatList } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MealItem from '@/components/MealItem';

// Stack parametrelerini tanımla
type RootStackParamList = {
    MealsOverView: { categoryId: string };


};

export type Meal = {
    id: string;
    title: string;
    imageUrl: string;
    ingredients: string[];
    steps: string[];
    categoryIds: string[];
    duration: number;
    complexity: string;
    affordability: string;
};

type MealsOverViewProps = NativeStackScreenProps<RootStackParamList, 'MealsOverView'>;

const MealsOverViewScreen: React.FC<MealsOverViewProps> = ({ route }) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });


    const renderCategoryItem = ({ item }: { item: Meal }) => {
        return <MealItem itemData={item} />;
    };

    return (
        <View className="flex-1 p-4">
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
            />
        </View>
    );
};

export default MealsOverViewScreen;
