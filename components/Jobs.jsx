import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import CardNearby from "./CardNearby";

const Jobs = () => {
  const { data, isError, isLoading } = useFetch("search", {
    query: "React Native",
    page: 1,
    num_pages: 1,
  });

  return (
    <View
      style={{
        width: "100%",
        marginTop: 6,
      }}
    >
      <View
        style={{
          marginTop: 10,
          marginVertical: 5,
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#aaa",
          }}
        >
          Nearby jobs
        </Text>
        <Text
          style={{
            color: "white",
          }}
        >
          View All
        </Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={"large"} color={"darkgrey"} />
      ) : isError ? (
        <Text>Something went wrong. Please try again.</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator
          data={data}
          renderItem={({ item }) => <CardNearby item={item} />}
          keyExtractor={(item) => item.job_id + item.job_posted_at_timestamp}
        />
      )}
    </View>
  );
};

export default Jobs;
