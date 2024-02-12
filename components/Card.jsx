import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Card = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 0.5,
        borderColor: "darkgrey",
        borderRadius: 5,
        margin: 3,
        padding: 5,
      }}
    >
      <View
        style={{
          margin: 3,
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
          }}
        >
          <Image
            source={{ uri: item.employer_logo }}
            resizeMode="contain"
            style={{ width: "80%", height: "80%", borderRadius: 5 }}
          />
        </View>
        <Text
          style={{
            width: 100,
            color: "white",
          }}
        >
          {item.employer_name}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <Text style={{ color: "white", width: "100%" }}>
          {item.job_title.slice(0, 20)} ..
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
