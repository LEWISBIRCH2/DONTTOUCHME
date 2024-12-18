import { Text } from "react-native";

export default function BadgeScreen({ navigation, route }) {
  return <Text>These are {route.params.name}'s badges</Text>;
}
