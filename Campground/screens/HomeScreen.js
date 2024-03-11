import { View, StyleSheet, ImageBackground, ScrollView, Pressable, Platform, Text, useWindowDimensions, Modal, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import WheelPicker from "react-native-wheely";



function HomeScreen(){
    const insets = useSafeAreaInsets();

    const [checkIn, setCheckIn] = useState(new Date());
    const [showCheckIn, setShowCheckIn] = useState(false);
  
    function showCheckInPicker() {
      setShowCheckIn(true);
    }
  
    function hideCheckInPicker() {
      setShowCheckIn(false);
    }
  
    function onChangeCheckIn(event, selectedDate) {
      const currentDate = selectedDate;
      if (Platform.OS === "android") {
        hideCheckInPicker(true);
      }
      setCheckIn(currentDate);
    }

    const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckOutPicker(true);
    }
    setCheckOut(currentDate);
  }

  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [numGuests, setNumGuests] = useState(0);
  const [showNumGuests, setShowNumGuests] = useState(false);

  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }

  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }

  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  const campCounts = [1, 2, 3, 4, 5];
  const [numCamp, setNumCamp] = useState(0);
  const [showNumCamp, setShowNumCamp] = useState(false);

  function showNumCampPicker() {
    setShowNumCamp(true);
  }

  function hideNumCampPicker() {
    setShowNumCamp(false);
  }

  function onChangeNumCamp(index) {
    setNumCamp(index);
  }
 
  const [results, setResults] = useState("");

  function onReserveHandler(){
    let res = `Check In: \t\t${checkIn.toDateString()}\n`
    res = res + `Check Out: \t\t${checkOut.toDateString()}\n`
    res = res + `Number of Guests: \t\t${guestCounts[numGuests]}\n`
    res = res + `Number of Campsites \t\t${campCounts[numCamp]}\n`
    setResults(res);
  };

  const { width, height } = useWindowDimensions();

  const dateLabelFlex = {
    fontSize: width * 0.04,
  };

  const dateTextFlex = {
    fontSize: width * 0.05,
  };

    return (
        <ImageBackground
            source={require("../assets/images/camping.jpg")}
            resizeMode="cover"
            style={styles.rootContainer}
            imageStyle={styles.backgroundImage}
        >
            <View
            style={[styles.rootContainer, {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            },
          ]}
        >

          <ScrollView style={styles.scrollContainer}>
            {/* Title of Campground */}
            <View style={styles.titleContainer}>
                <Title>Campground Reservation</Title>
            </View>

            <View style={styles.rowContainer}>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
              <Pressable onPress={showCheckInPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>
    
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
        
              <Pressable onPress={showCheckOutPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>
          </View>

          <View>
            {showCheckIn && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckInAndroid"
                value={checkIn}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckIn}
              />
            )}
            {showCheckIn && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckInIOS"
                      value={checkIn}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckIn}
                    />
                    <NavButton title="confirm" onPress={hideCheckInPicker} />
                  </View>
                </View>
              </Modal>
            )}
            {showCheckOut && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckOutAndroid"
                value={checkOut}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckOut}
              />
            )}
            {showCheckOut && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckOutIOS"
                      value={checkOut}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckOut}
                    />
                    <NavButton title="confirm" onPress={hideCheckOutPicker} />
                  </View>
                </View>
              </Modal>
            )}
          </View>
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel1, dateLabelFlex]}>
              Number of Guests:
            </Text>
            <Pressable onPress={showNumGuestsPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>{guestCounts[numGuests]}</Text>
              </View>
            </Pressable>

            <Modal
            animationType="slide"
            transparent={true}
            visible={showNumGuests}
            supportedOrientations={["portrait", "landscape"]}
            >
                <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.dateText, dateTextFlex]}>Enter Number of Guests:</Text>
                        <WheelPicker 
                        selectedIndex={numGuests}
                        options={guestCounts}
                        onChange={onChangeNumGuests}
                        containerStyle={{width:200}}
                        />
                        <Button title="confirm" onPress={hideNumGuestsPicker} />
                    </View>
                </View>
            </Modal>
          </View>

          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel1, dateLabelFlex]}>
              Number of Camp Sites:
            </Text>
            <Pressable onPress={showNumCampPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>{campCounts[numCamp]}</Text>
              </View>
            </Pressable>

            <Modal
            animationType="slide"
            transparent={true}
            visible={showNumCamp}
            supportedOrientations={["portrait", "landscape"]}
            >
                <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.dateText, dateTextFlex]}>Enter Number of Camp Sites:</Text>
                        <WheelPicker 
                        selectedIndex={numCamp}
                        options={campCounts}
                        onChange={onChangeNumCamp}
                        containerStyle={{width:200}}
                        />
                        <Button title="confirm" onPress={hideNumCampPicker} />
                    </View>
                </View>
            </Modal>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton onPress={onReserveHandler}>Reserve Now!</NavButton>
          </View>
          <View style={styles.resultsContainer}>
            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
          </View>
          </ScrollView>

        </View>
        </ImageBackground>

        
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
    backgroundImage: {
        opacity: 0.3,
      },
    titleContainer: {
        padding: 7,
        marginVertical: 20,
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500,
        backgroundColor: Colors.primary300,
      },
    scrollContainer: {
        flex: 1,
        width: 3000,
        maxWidth: "95%",
      },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 20,
        marginBottom: 20,
      },
    dateContainer: {
        backgroundColor: Colors.primary300o5,
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary800,
      },
    dateLabel: {
        fontSize: 50,
        color: Colors.primary800,
        textShadowColor: "grey",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
      },
    dateLabel1: {
        fontSize: 50,
        fontWeight: "bold",
        color: Colors.primary800,
        textShadowColor: "grey",
        padding: 5,
        
      },
    dateText: {
        fontSize: 20,
        color: Colors.accent800,
        textShadowColor: "black",
        textShadowOffset: {width: 2, height: 2 },
        textShadowRadius: 2,
      },
    centeredModalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
    modalView: {
        margin: 20,
        backgroundColor: Colors.accent500,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    buttonContainer: {
        alignItems: "center"
      },
    results: {
        textAlign: "center",
        color: Colors.primary800,
        textShadowColor: "black",
        textShadowOffset: {width: 1, height: 1 },
        textShadowRadius: 1,
        paddingTop: 15,
      },
});