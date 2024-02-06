import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "Ten Things I Hate About You",
      image: require("./assets/images/movie1.jpg"),
      rating: "9.8",
    },
    {
      name: "Barbie",
      image: require("./assets/images/movie2.jpg"),
      rating: "9.5",
    },
    {
      name: "Entergalactic",
      image: require("./assets/images/movie3.jpg"),
      rating: "9",
    },
    {
      name: "Barbie Princess and the Pauper",
      image: require("./assets/images/movie7.jpg"),
      rating: "8.5",
    },
    {
      name: "Spider-Man Into the Spider-Verse",
      image: require("./assets/images/movie8.jpg"),
      rating: "8",
    },
    {
      name: "Almost Famous",
      image: require("./assets/images/movie4.jpg"),
      rating: "8",
    },
    {
      name: "All the Bright Places",
      image: require("./assets/images/movie5.jpg"),
      rating: "7.5",
    },
    {
      name: "Another Cinderella Story",
      image: require("./assets/images/movie6.jpg"),
      rating: "7.5",
    },
    
    {
      name: "Wonder Woman",
      image: require("./assets/images/movie9.jpg"),
      rating: "7.5",
    },
    {
      name: "Hustlers",
      image: require("./assets/images/movie10.jpg"),
      rating: "7.5",
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.movieInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.rating}>Rating: {item.rating}</Text>
      </View>
    </View>
  );

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootcontainer}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>

        <FlatList
          style={styles.listcontainer}
          data={movieItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    backgroundColor: '#5abc5d',
  },
  titlecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 5,
    padding: 20,
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#f14bac',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listcontainer: {
    paddingHorizontal: 20,
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 3, 
    borderColor: '#000000', 
    borderRadius: 5,
    padding: 10, 
  },
  image: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  movieInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 16,
  },
});
