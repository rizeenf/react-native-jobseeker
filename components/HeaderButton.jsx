import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HeaderButton = ({ iconName }) => {
  return (
    <TouchableOpacity>
      <View>
        <Ionicons name={iconName} size={24} color={"white"} />
      </View>
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({});
