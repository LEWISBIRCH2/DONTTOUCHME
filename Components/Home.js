import { Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <Button
        title="Go to Lewis' profile"
        onPress={() => navigation.navigate("Profile", { name: "Lewis" })}
      />
      <Button
        title="Go to Lewis' badges"
        onPress={() => navigation.navigate("Badges", { name: "Lewis" })}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </>
  );
}
