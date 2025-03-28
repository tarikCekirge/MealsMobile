import { View, Text } from 'react-native'
import React from 'react'

interface MealItemProps {
    itemData: {

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
}

export default function MealItem({ itemData }: MealItemProps) {
    return (
        <View>
            <Text>{itemData.title}</Text>
        </View>
    )
}