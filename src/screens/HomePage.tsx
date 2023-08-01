import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Image } from "react-native";
import MenuExample from "../Components/menu";

export default function Welcome() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-300">
     <MenuExample></MenuExample>
    </View>
  );
}
