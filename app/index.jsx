import {
  View,
  Text,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Link, Stack } from "expo-router";
import React from "react";
import HeaderButton from "../components/HeaderButton";
import Welcome from "../components/Welcome";
import NearJobs from "../components/NearJobs";
import Jobs from "../components/Jobs";
import SearchJob from "../components/SearchJob";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1f1f1f" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#1f1f1f",
          },
          headerShadowVisible: false,
          headerLeft: () => <HeaderButton iconName="menu-outline" />,
          headerTitle: "",
          headerRight: () => <HeaderButton iconName="person-circle-outline" />,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: 12,
          }}
        >
          <Welcome />
          <SearchJob />
          <NearJobs />
          <Jobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
