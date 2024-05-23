import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";

export default function Account({ navigation }) {
  //로그인 기능 구현
  
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <Text>나 로그인페이지</Text>
      <Button
        onPress={() => navigation.navigate("Tab")}
        title="홈으로"
      ></Button>
    </SafeAreaView>
  );
}
