import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';

interface IconButtonProps {
    onPress?: () => void;
    icon: keyof typeof Ionicons.glyphMap;
    color?: string;
    size?: number
}

const IconButton = ({ onPress, icon, color = 'white', size = 24 }: IconButtonProps) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Pressable
            style={isPressed ? styles.pressed : null}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={onPress}
        >
            <Ionicons name={icon} size={size} color={isPressed ? 'red' : color} />
        </Pressable>
    );
};

export default IconButton;


const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
});