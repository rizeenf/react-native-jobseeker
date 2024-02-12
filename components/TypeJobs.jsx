import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Card from "./Card";

const JOB_TYPES = ["Fulltime", "Contractor", "Parttime", "Intern"];

const TypeJobs = () => {
  const [typeActive, setTypeActive] = useState("Fulltime");

  return (
    <View
      style={{
        width: "100%",
        marginTop: 6,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={JOB_TYPES}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.lists(typeActive, item)}
            onPress={() => setTypeActive(item)}
          >
            <Text style={styles.listItem}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default TypeJobs;

const styles = StyleSheet.create({
  lists: (active, item) => ({
    marginHorizontal: 3,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: active === item ? "orangered" : "white",
    opacity: active === item ? 1 : 0.5,
  }),
  listItem: {
    color: "white",
  },
});
