import { StyleSheet } from "react-native";

//import EditScreenInfo from '../../components/EditScreenInfo';
//import { Text, View } from "../../components/Themed";
import { Text, Icon } from "@components";
import { View } from "react-native";
import { Text as TextRN } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      <TextRN className="text-red-700">Hey</TextRN>
      <Icon name="car" size={30} color={"green"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
