import { View, Text } from 'react-native'
import React from 'react'

interface MealDetailsProps {
    itemData: {
        id?: string;
        title?: string;
        imageUrl?: string;
        ingredients?: string[];
        steps?: string[];
        categoryIds?: string[];
        duration?: number;
        complexity?: string;
        affordability?: string;
    };
}

const MealDetails = ({ itemData }: MealDetailsProps) => {
    if (!itemData) {
        return <Text className="text-white text-center">Meal Not Found</Text>;
    }

    const { steps = [], ingredients = [], duration = 0, complexity = "", affordability = "" } = itemData;

    return (
        <View className='mt-2'>
            <View className='flex-row justify-center my-2 items-center gap-2 mb-6'>
                <Text className='text-white text-base'>{duration} min</Text>
                <Text className='text-white text-base'>{complexity.toUpperCase()}</Text>
                <Text className='text-white text-base'>{affordability.toUpperCase()}</Text>
            </View>

            <View className='mb-6'>
                {ingredients.length > 0 ? (
                    <>
                        <Text className='text-center text-xl font-bold text-white mb-2'>Ingredients </Text>
                        {ingredients.map((ingredient, index) => (
                            <Text className='text-white text-base' key={index}>{index + 1} - {ingredient}</Text>
                        ))}
                    </>
                ) : (
                    <Text>No ingredients available</Text>
                )}
            </View>

            <View className='mb-6'>
                {steps.length > 0 ? (
                    <>
                        <Text className='text-center text-xl font-bold text-white mb-2'>Steps </Text>
                        {steps.map((step, index) => (
                            <Text className='text-white text-base' key={index}>{step}</Text>
                        ))}
                    </>
                ) : (
                    <Text>No ingredients available</Text>
                )}
            </View>
        </View>
    );
};

export default MealDetails;
