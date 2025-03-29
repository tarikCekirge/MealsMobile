import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/_layout';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'MealDetailsScreen'>;

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
    const navigation = useNavigation<NavigationProp>();
    const [isPressed, setIsPressed] = useState(false);

    const { id, title, imageUrl, duration, complexity, affordability } = itemData;

    return (
        <View className='mb-6 bg-[#1b2125] rounded-lg overflow-hidden ios:overflow-visible flex-1' style={isPressed ? styles.pressedButton : null}>
            <Pressable
                android_ripple={{ color: '#1a1818' }}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={() => navigation.navigate('MealDetailsScreen', { mealId: id })}
            >
                <View className='p-4'>
                    <Image className='w-full h-56 rounded-md' source={{ uri: imageUrl }} />
                </View>
                <Text className='font-bold text-center text-lg text-white'>{title}</Text>
                <View className='flex-row justify-center my-2 items-center gap-2 mb-6'>
                    <Text className='text-white text-xs'>{duration} min</Text>
                    <Text className='text-white text-xs'>{complexity.toUpperCase()}</Text>
                    <Text className='text-white text-xs'>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    pressedButton: {
        opacity: 0.5,
    },
});
