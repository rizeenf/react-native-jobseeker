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

const NearJobs = () => {
  const [typeActive, setTypeActive] = useState("Fulltime");

  return (
    <View
      style={{
        width: "100%",
        marginTop: 6,
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

export default NearJobs;

const styles = StyleSheet.create({
  lists: (active, item) => ({
    marginHorizontal: 3,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: "darkgrey",
    opacity: active === item ? 1 : 0.5,
  }),
  listItem: {
    color: "white",
  },
});
