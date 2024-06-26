import { View, Text } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { LISTINGS } from "../data/dummy_data";
import ListingItem from "../components/List/ListingItem";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";
import List from "../components/List/List";

function BookmarksScreen (){
    const bookmarkedListingsCtx = useContext(BookmarksContext);
  const bookedmarkedListings = LISTINGS.filter((listingItem) => {
    return bookmarkedListingsCtx.ids.includes(listingItem.id);
  });

  if (bookedmarkedListings.length === 0) {
    return <View style={styles.rootContainer}>
        <Text style={styles.text}>No Saved Listings Detected...</Text>

    </View>;
  }

  return <List items={bookedmarkedListings}/>

    return (
         <View>
        <Text>Bookmarked Listing Screen</Text>
    </View>
    );
}

export default BookmarksScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'black',
    },
    text: {
        fontSize: 20,
        textAlign:'center', 
        fontWeight: 'bold',
        color: Colors.primary300,
        opacity: 0.6,
    },
})