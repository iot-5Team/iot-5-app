import { SafeAreaView, View, Text, StyleSheet, Button, TextInput } from "react-native";
import { fullWidth } from "../devices";

export default function Account({ navigation }) {
  //로그인 기능 구현
  
  return (
    <SafeAreaView style={{ alignItems: "center", justifyContent:"center" }}>
      <Text>나 로그인페이지</Text>
      
      <View style={{width:fullWidth*0.7, backgroundColor:"blue", marginTop:10}}>
        <TextInput></TextInput>
      </View>
      <View style={{width:fullWidth*0.7, backgroundColor:"blue",  marginTop:10}}>
        <TextInput></TextInput>
      </View>
      <Button
        onPress={() => navigation.navigate("Tab")}
        title="홈으로"
      ></Button>

    </SafeAreaView>
  );
}
