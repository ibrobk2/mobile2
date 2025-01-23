import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from 'expo-image';
import ImageViewer from "@/components/ImageViewer";

const bgImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container} >
      <Text>Home Screen</Text>
      <View>

     
      <ImageViewer imgSource={bgImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
 
});
