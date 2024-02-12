import { View, Text } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View>
      <Text
        style={{
          color: "white",
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        Welcome{" "}
        <Text
          style={{
            color: "orangered",
          }}
        >
          Rizki
        </Text>
        ,
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        Find your{" "}
        <Text
          style={{
            color: "orangered",
          }}
        >
          dream{" "}
        </Text>
        jobs
      </Text>
    </View>
  );
};

export default Welcome;
