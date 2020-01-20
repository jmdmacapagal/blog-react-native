import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPostId = navigation.getParam("id");

  const blogPost = state.find(blogPost => blogPost.id === blogPostId);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const blogPostId = navigation.getParam("id");

  return {
    headerRight: (
      <TouchableOpacity>
        <EvilIcons
          name="pencil"
          size={35}
          onPress={() => navigation.navigate("Edit", { id: blogPostId })}
        />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
