import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/image1.png")} />
          
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Allison Ayers</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("mailto:aayers5@hgtc.edu")}>aayers5@hgtc.edu</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:15405195572")}>(540)519-5572</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/allisonayers/Mobile-wireless-appliances.git")}>GitHub Link</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8f8a8a",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    backgroundColor: "#1dc3ff",
    padding: 10,
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: "cover",
  },
  infoContainer: {
    backgroundColor: "#1d96ff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 10,

  },
  

});
