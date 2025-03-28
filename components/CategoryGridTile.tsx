import { View, Text, Pressable } from 'react-native'
import React from 'react'

type CategoryGridTileProps = {
    title: string;
    color: string;
};


const CategoryGridTile = ({ title, color }: CategoryGridTileProps) => {
    return (
        <View style={{ backgroundColor: color }}>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile