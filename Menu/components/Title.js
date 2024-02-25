import {View, Text, StyleSheet} from "react-native";

function Title(props){
    return <Text style={styles.title}>(props.children)</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        textAlign: "center"
    }
})