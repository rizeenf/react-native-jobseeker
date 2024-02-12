import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

const PopularJobs = () => {
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
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"darkgrey"} />
      ) : isError ? (
        <Text>Something went wrong. Please try again.</Text>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item) => item.job_id + item.job_posted_at_timestamp}
        />
      )}
    </View>
  );
};

export default PopularJobs;
