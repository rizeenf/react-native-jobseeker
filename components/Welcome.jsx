import { View, Text } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        Welcome{" "}
        <Text
          style={{
            color: "orange",
          }}
        >
          Rizki
        </Text>
        ,
      </Text>
      <Text
        style={{
          marginTop: 5,
          color: "white",
          fontSize: 24,
          fontWeight: 500,
        }}
      >
        Find your{" "}
        <Text
          style={{
            color: "orange",
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
