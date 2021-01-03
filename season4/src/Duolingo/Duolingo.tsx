import React from "react";
import { View, StyleSheet } from "react-native";

import WordList from "./WordList";
import Word from "./Word";
import Header from "./components/Header";
import Footer from "./components/Footer";

const words = [
  { id: 1, word: "Work" },
  { id: 8, word: "Refuel" },
  { id: 2, word: "Relax" },
  { id: 7, word: "Challenge" },
  { id: 6, word: "Spend" },
  { id: 9, word: "Plan" },
  { id: 5, word: "Earn" },
  { id: 3, word: "Mode1" },
  { id: 4, word: "Mode2" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

const Duolingo = () => {
  return (
    <View style={styles.container}>
      <WordList>
        {words.map((word) => (
          <Word key={word.id} {...word} />
        ))}
      </WordList>
      <Footer />
    </View>
  );
};

export default Duolingo;
