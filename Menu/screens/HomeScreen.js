import {View, StyleSheet, Text, Image} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";



function HomeScreen(props) {

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
            ]}
            >

            <View>
                <Title>Pokemoto</Title>
            </View>

            {/* <View>
                
            </View> */}

        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
    }
})