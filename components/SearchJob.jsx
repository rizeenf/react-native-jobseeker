import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchJob = () => {
  return (
    <View
      style={{
        marginTop: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 5,
      }}
    >
      <TextInput
        style={{
          padding: 10,
          paddingHorizontal: 20,
          borderColor: "white",
          borderStyle: "solid",
          borderWidth: 0.5,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          width: "85%",
          color: "white",
        }}
        placeholder="Cari lowongan.."
        placeholderTextColor={"darkgray"}
      />
      <TouchableOpacity
        style={{
          padding: 10,
          borderColor: "white",
          borderStyle: "solid",
          borderWidth: 0.5,
          borderTopStartRadius: 0,
          borderBottomStartRadius: 0,
          borderRadius: 10,
          width: "15%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="search" size={24} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchJob;
