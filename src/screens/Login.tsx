import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Pressable, Image, TextInput } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  return (
    <View className="flex-1 items-center justify-center bg-grey-300">
      <Image
        source={require("vesitguide/assets/logo.png")}
        className="w-1/3 h-1/6 rounded-3xl "
      ></Image>

      <Text className="text--500 font-bold text-3xl mt-">Login Via VesID</Text>
      <View className="items-center justify-center">
        <TextInput
          placeholder="Enter the vesid"
          autoFocus
          value={email}
          onChangeText={setEmail}
          className="border border-grey-400 p-3 rounded-xl mt-5 w-9/10"
        ></TextInput>

        <TextInput
          placeholder=" Enter the password"
          value={email}
          onChangeText={setEmail}
          className="border border-grey-400 p-3 rounded-xl mt-5 w-9/10"
        ></TextInput>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
