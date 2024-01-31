import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, Image, View, Pressable, Modal, TextInput, } from 'react-native';

  export default function App() {
    const [userQuestion, setUserQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
  
    const magicEightBallResponses = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy, try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
    ];
  
    const handleInputChange = (text) => {
      setUserQuestion(text);
    };
  
    const handleButtonClick = () => {
      const randomResponse =
        magicEightBallResponses[
          Math.floor(Math.random() * magicEightBallResponses.length)
        ];
      setResponse(randomResponse);
      setModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setModalVisible(false);
      setUserQuestion('');
      setResponse('');
    };
  
  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
      <Text style={styles.titletext}>Magic Eight Ball!</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Ask a yes or no question:</Text>
      </View>

      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={userQuestion}
            onChangeText={handleInputChange}
          />
      </View>

      <View style={styles.ButtonContainer}>
        <Pressable onPress={handleButtonClick}>
          <View style={styles.Button}>
            <Text style={styles.ButtonText}>Enter</Text>
          </View>
        </Pressable>
        {/* <Button title='Enter' style={styles.Button}/> */}
      </View>


      <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/image.png")} />
      </View>

      <Modal visible={isModalVisible} animationType="slide">
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalText}>User's Question: {userQuestion}</Text>
      <Text style={styles.modalText}>Response: {response}</Text>
      <Pressable style={styles.closeButton} onPress={handleCloseModal}>
        <Text style={styles.closeButtonText}>Close</Text>
      </Pressable>
    </View>
  </View>
</Modal>


    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#590764',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: "#950bf7",
    padding: 10,
    paddingTop: 20,
    borderWidth: 3,
    borderRadius: 3,
  },
  titletext: {
    textAlign: "center",
    fontSize: 50,
  },
  textContainer: {
    padding: 10,
  },
  text: {
    fontSize: 30,

  },
  inputContainer: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 7,
    margin: 10,
  },
  input: {
    padding: 10,
    fontSize: 15,
    height: 100,
    width: 300,
  },
  ButtonContainer: {

  },
  Button: {
    backgroundColor: "#950bf7",
    padding: 5,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageContainer: {
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Semi-transparent black background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#590764',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
