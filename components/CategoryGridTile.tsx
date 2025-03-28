import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

type CategoryGridTileProps = {
    title: string;
    color: string;
    onPress: () => void;
    navigation: any

};

const CategoryGridTile = ({ title, color, onPress, navigation }: CategoryGridTileProps) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <View
            className="flex-1 h-36 rounded-lg m-3 elevation-md overflow-hidden ios:overflow-visible"
            style={[{ backgroundColor: color }, isPressed ? styles.pressedButton : null]}
        >
            <Pressable
                className="flex-1 ripple-gray-100"
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={onPress}
            >
                <View className="flex-1 p-4 justify-center items-center rounded-lg" style={{ backgroundColor: color }}>
                    <Text className="font-bold text-lg text-center">{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    pressedButton: {
        opacity: 0.5,
    },
});
