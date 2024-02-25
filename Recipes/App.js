import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, title } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './constants/colors';
import RecipesScreen from './screens/RecipesScreen';
import AddScreen from './screens/AddScreen';


export default function App() {

  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(6);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Sushi Bake",
      text: "Ingredients:\n- 2 cups sushi rice\n- 1/4 cup rice vinegar\n- 1 tbsp sugar\n- 1/2 lb imitation crab meat\n- 1/2 cup mayonnaise\n- 2 tbsp sriracha\n- 1/2 cup cream cheese\n- 1/4 cup sliced green onions\n- 1/2 cup shredded nori\n- 1 tbsp sesame seeds\n\nInstructions:\n1. Cook sushi rice and season with rice vinegar and sugar.\n2. Mix crab meat with mayonnaise, sriracha, and cream cheese.\n3. Spread rice in a baking dish, top with crab mixture.\n4. Bake until bubbly, then garnish with green onions, nori, and sesame seeds."
    },
    {
      id: 2,
      title: "Cupcakes",
      text: "Ingredients:\n- 1 1/2 cups all-purpose flour\n- 1 cup granulated sugar\n- 1/2 cup butter, softened\n- 2 eggs\n- 1/2 cup milk\n- 2 tsp baking powder\n- 1 tsp vanilla extract\n\nInstructions:\n1. Preheat oven to 350°F and line a muffin tin with cupcake liners.\n2. Cream together butter and sugar, then beat in eggs one at a time.\n3. Mix in flour, baking powder, and milk alternately.\n4. Stir in vanilla, fill liners, and bake for 20 minutes or until a toothpick comes out clean."
    },
    {
      id: 3,
      title: "Crab Rangoon",
      text: "Ingredients:\n- 8 ounces cream cheese, softened\n- 1/2 cup crab meat, chopped\n- 1/4 cup green onions, finely chopped\n- 1 clove garlic, minced\n- 1 tsp soy sauce\n- 1 package wonton wrappers\n- Oil for frying\n\nInstructions:\n1. In a bowl, combine cream cheese, crab meat, green onions, garlic, and soy sauce.\n2. Place a small spoonful of the mixture in the center of each wonton wrapper.\n3. Moisten the edges of the wrapper with water, fold in a triangle, and press to seal, removing as much air as possible.\n4. Heat oil to 375°F and fry the wontons until golden brown."
    },
    {
      id: 4,
      title: "Cheese Omelette",
      text: "Ingredients:\n- 2 eggs\n- 1/2 tbsp olive oil\n- 1 tbsp butter\n- 15gs cheddar, finely grated\n STEP 1\n Crack the eggs into a jug and whisk well with a fork. Season with a pinch of salt.\n STEP 2\n Heat the oil and butter in a medium non-stick frying pan over a medium-low heat. Once the butter has started to foam, pour in the eggs then gently draw in the eggs from four points so there are folds in the centre. Do this once or twice, then leave the eggs to cook gently for 2-3 mins. Sprinkle over the cheese and gently fold the omelette in half. Sprinkle over some black pepper to serve."
    },
    {
      id: 5,
      title: "Fried Rice",
      text: "Ingredients:\n- 2 tsp oil \n- 1 egg\n- 175gs mushrooms, sliced\n- 200gs frozen peas\n- 1 garlic clove, crushed\n- small knob of ginger, grated\n- 2 tsp dark soy sauce\n- 1 tsp sugar\n- 250g cooked basmati rice\n STEP 1\n  Heat the oil in a pan, then add the egg. Leave for 1 min then tip it out and slice. Add the mushrooms to pan, then fry until golden. Add the peas, garlic and ginger, then cook for 1 min.\n STEP 2\n Mix the soy sauce and sugar together. Turn up the heat, add the cooked rice to the pan, heat through, then splash in the sweet soy sauce. Stir through the egg and serve straight away."
    }
  ]);

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  }

  function addScreenHandler() {
    setCurrentScreen("add");
  }

  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText){
    setCurrentRecipes((currentRecipes) => {
      return [...currentRecipes, {id: currentID, title: enteredRecipeTitle, text: enteredRecipeText},
      ];
    });
    setCurrentID(currentID + 1);
    recipesScreenHandler();
  }

  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => 
        item.id !== id
      );
    });
  }

  let screen = <HomeScreen onNext={recipesScreenHandler} />;

  if (currentScreen === "add"){
    screen = <AddScreen onAdd={addRecipeHandler} 
    onCancel={recipesScreenHandler}/>
  }

  if (currentScreen === "recipes"){
    screen = <RecipesScreen onHome={homeScreenHandler}
     onAdd={addScreenHandler}
     onDelete={deleteRecipeHandler}
     currentRecipes={currentRecipes}/>
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
