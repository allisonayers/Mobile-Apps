import {View, StyleSheet, Text} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";



function MenuScreen(props) {

    const insets = useSafeAreaInsets();

    return (
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }
        ]}>

            <View>
                <Text>menu</Text>
            </View>

        </View>
    )
}

export default MenuScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
    }
})