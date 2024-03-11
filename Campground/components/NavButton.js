import { Text, View, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
    const { width, height } = useWindowDimensions();

    return (
        <Pressable
            onPress={props.onPress}
            // providing styling and checking for pressed can set temporary styles only active when pressed
            style={({ pressed }) => pressed && StyleSheet.pressedItem}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, {fontSize: width * 0.07}]}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default NavButton;

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 1000,
        maxWidth: "70%",
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 300,
        backgroundColor: Colors.primary500,
    },
    pressedItem: {
        opacity: 0.5,
    },
    text: {
        padding: 8,
        fontSize: 25,
        fontFamily: "mountain",
        textAlign: "center",
        color: Colors.primary300,
    },
});