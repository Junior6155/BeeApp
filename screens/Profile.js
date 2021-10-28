import React from "react";
import { View, Text, Image } from "react-native";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "centeryarn add @react-navigation/native",
      }}
    >
      <Image
        style={{
          width: 150,
          height: 150,
        }}
        source={{ uri: "https://unsplash.com/photos/Hboh7zaDDcc" }}
      />
      <Text style={{ colour: "black" }}>Email</Text>
      <Text style={{ colour: "black" }}>Username</Text>
      <Text style={{ colour: "black" }}>ID</Text>
      <Text style={{ colour: "black" }}>School</Text>
      <Text style={{ colour: "black" }}>Favorite Subjects</Text>
    </View>
  );
}
