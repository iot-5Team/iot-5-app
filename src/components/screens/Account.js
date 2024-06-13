import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet,Image, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {actionSetUserInfo} from '../../reduxContainer/actions/setUserAction'
import { icon } from "../../../assets/images";
import { fullHeight, fullWidth } from "../devices";
import {host, SPport} from '@env';


export default function Account({ navigation }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.setLoginUserData);
  //console.log('data',user) //로그인데이터 확인
  
  useEffect(()=>{
  if(user.userId !=''){
    navigation.navigate('Tab');
  }
  },[user])
  
  const handleSetUserData = (id , pw, token) =>{
    dispatch(actionSetUserInfo(id, pw, token ));
  }

  const handleLogin = async (id, password) => {
    try {
      const response = await fetch(`http://${host}:${SPport}/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json', // 내용 유형을 JSON으로 명시
        },
        body: JSON.stringify({ // body를 문자열로 변환
          userId: id,
          password: password
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      const accessToken = await response.text()
      if(accessToken!='')handleSetUserData(id, password, accessToken);
    } catch (error) {
      console.error('네트워크 상태 에러 status Code:', error);
    }
  }
  
  
  return (
    <SafeAreaView style={{ flex:1, alignItems: "center", justifyContent:"center" }}>
      <View style={{height: fullHeight*0.25}}>
        <Image source={icon.logo} style={{width:fullWidth*0.45,height:fullWidth*0.45}}/>
      </View>
      <View style={{alignItems:"center", height:fullHeight*0.1}}>
        <View style={{flexDirection:"row",alignItems:"flex-end"}}>
        <Text style={{fontSize:18, fontWeight:"500"}}> 내 손 안의 </Text>
        <Text style={{color:"#937DC2",fontSize:18, fontWeight:"500", marginBottom:1}}>AI </Text>
        <Text style={{fontSize:18, fontWeight:"500", marginBottom:2}}>도서관</Text>
        </View>
        

        <Text style={{marginTop:15,fontSize:26,fontWeight:"700", color:"#75649b" }}>MIML</Text>

      </View>
      <View style={{width:fullWidth*0.7, marginTop:10}}>
        <TextInput
        placeholder="ID"
        value={id}
        onChangeText={setId}
        style={styles.textInputContainer}
        ></TextInput>
      </View>
      <View style={{width:fullWidth*0.7, marginTop:10}}>
        <TextInput
         placeholder="PassWord"
         value={pw}
         onChangeText={setPw}
         style={styles.textInputContainer}
         ></TextInput>
      </View>
      <View style={{height:fullHeight*0.2,justifyContent:"center", alignItems:"center"}}>
      <TouchableOpacity
        onPress={() =>  {
           handleLogin(id, pw);
          }}
        style={{marginTop:10,width:fullWidth*0.8, height:40, backgroundColor:"#937DC2", borderRadius:10, alignItems:"center",justifyContent:"center" }}
      >
        <Text style={{color:"#FFFFFF", fontSize:18, fontWeight:"400 "}}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop:10,width:fullWidth*0.8, height:40, backgroundColor:"#BDBDBD", borderRadius:10, alignItems:"center",justifyContent:"center" }}
      >
        <Text style={{color:"#FFFFFF", fontSize:18, fontWeight:"400 "}}>Sign IN</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textInputContainer:{
    backgroundColor: '#FFFFFF', // 카드 배경색 설정
    padding: 10, // 내부 여백 설정
    borderRadius: 10, // 테두리 둥글게 처리
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 }, // 그림자의 방향을 아래로 조정
    shadowOpacity: 0.5, // 그림자의 불투명도를 증가
    shadowRadius: 6 // 그림자의 퍼짐 정도를 증가
  }
})