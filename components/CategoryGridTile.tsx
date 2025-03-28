import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';

type CategoryGridTileProps = {
    title: string;
    color: string;
};

const CategoryGridTile = ({ title, color }: CategoryGridTileProps) => {
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
            >
                <View className="flex-1 p-4 justify-center items-center rounded-lg" style={{ backgroundColor: color }}>
                    <Text className="font-bold text-lg">{title}</Text>
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
