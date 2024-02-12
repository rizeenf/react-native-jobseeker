import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CardNearby = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        height: 150,
        borderWidth: 0.5,
        borderColor: "darkgrey",
        borderRadius: 5,
        marginVertical: 5,
        padding: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
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
              width: 80,
              height: 80,
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
              fontWeight: "600",
              flex: 1,
              justifyContent: "flex-start",
              fontSize: 16,
            }}
          >
            {item.employer_name}
          </Text>
        </View>

        <Ionicons name="bookmark-outline" size={24} color={"orange"} />
      </View>

      <View
        style={{
          width: "100%",
        }}
      >
        <Text
          style={{ color: "white", width: "100%", fontSize: 16 }}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text
          style={{ color: "#aaa", width: "100%", fontSize: 14 }}
          numberOfLines={1}
        >
          {item.job_city} {item.job_country}
        </Text>
        <View
          style={{
            width: "100%",
            marginTop: 5,
            flexDirection: "row",
            gap: 3,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#aaa",
              fontSize: 12,
            }}
          >
            Remote
          </Text>
          {item.job_is_remote ? (
            <Ionicons
              name="checkmark-circle-outline"
              size={16}
              color={"green"}
            />
          ) : (
            <Ionicons name="close-circle-outline" size={16} color={"red"} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardNearby;
