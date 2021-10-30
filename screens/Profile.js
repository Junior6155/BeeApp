import React from "react";
import { View, Text, Image } from "react-native";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
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
    </View>
  );
}
