import { Text } from "react-native";

export default function ProfileScreen({ navigation, route }) {
  return (
    <>
      <Text>This is {route.params.name}' profile</Text>;
      <Text>
        GAMES PLAYED // WINS // WIN PERCENTAGE // FURTHEST DISTANCE IN ONE
        BREAKOUT // WIN STREAK{" "}
      </Text>
    </>
  );
}
