import { SafeAreaView, View, Text, StyleSheet, } from "react-native";

export default function ShowUser({route}){
    const {info} = route.params;
    console.log('수신데이터',info)
    return(
        <SafeAreaView>
            <Text>닉네임 : {info.nickname}</Text>
            <Text>이메일 : {info.email}</Text>
            <Text>dd</Text>
            <Text>dd</Text>
            <Text>dd</Text>
        </SafeAreaView>
    )
}