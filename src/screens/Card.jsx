import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = () => {
  return (
    <View style={styles.center}>
      <Text>This is the card screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Card;
