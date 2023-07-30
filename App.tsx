import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Pressable>
        <Text className=" bg-blue-500 hover:bg-blue-700 text-pink-300 font-bold py-2 px-4 rounded-full">
          Login using Vesid
        </Text>
      </Pressable>

      <Text className="text--500 font-bold  ">
        Welcome to the vesitguide
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
