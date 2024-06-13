import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList, Image,  ScrollView,TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import {host, SPport} from '@env';
import {fullWidth,fullHeight,} from "../../devices.js"; //디바이스 화면크기 관련 js파일
import { icon } from "../../../../assets/images.js";
import { useNavigation } from "@react-navigation/native";
// const membership
const Setting = () => {
  const user = useSelector(state => state.setLoginUserData);
  const [userName, setUserName] = useState('');
  const [userInfo, setUserInfo] = useState({});
  
  const callUserName = async() =>{
    try{
      const response  = await fetch(`http://${host}:${SPport}/user-info`,{
        method:"GET",
        headers:{
          'Authorization': `Bearer ${user.accessToken}`
        }
      });
      if(!response.ok){
        throw new Error ("Network response error status", response.status);
      }
      const resData = await response.text();
      const userData = JSON.parse(resData);
      setUserInfo(userData);
      setUserName(userData.nickname);
    }catch(error){
      console.error("status error code:",error)
    }
  }
  useEffect(()=>{
    if(user.userId != ''){
      callUserName();
    }
    
  },[user]);
  



  return (
    <SafeAreaView style={{ flex: 1, alignItems:"center"}}>
      <View style={{width:fullWidth*0.9, alignItems:"flex-start"}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color:"#937DC2"
        }}
      >
        설정
      </Text>
      </View>
      <View style={{height:fullHeight*0.15, alignItems:"center", justifyContent:"center"}}> 
        <Image source={icon.miml} style={{width: 75, height:75 , borderRadius:25}}/>
        <Text style={{fontSize:18, fontWeight:"700" }}>{userName}</Text>
      </View>
      <ScrollView>
      <View style={styles.setting_container}>
        <Text style={styles.setting_text}>로그인/회원정보</Text>        
      </View> 
      {/* 로그인/회원정보 설정세션 */}
      <Membership_setting info={userInfo}/> 
      <View style={styles.setting_container}>
        <Text style={styles.setting_text}>알림 설정</Text>        
      </View> 
      <Alert_setting/>
      <View style={styles.setting_container}>
        <Text style={styles.setting_text}>기타 설정</Text>        
      </View> 
      <Other_setting/>
      </ScrollView>
      <View>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};
const Membership_setting =({info})=>{
  const navigation = useNavigation();
  console.log("사용자 정보 넘겨주기",info)
  // 로그인/회원정보 설정세션 
  return(
    <View style={styles.depart_set_container}>
    <TouchableOpacity onPress={()=>{
      navigation.navigate('userInfo', {info: info})
    }}>
      <View style={{...styles.set_items, borderBottomWidth:1, borderColor:"lightgrey"}}>
        <Text>사용자 정보</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View  style={{...styles.set_items, borderBottomWidth:1, borderColor:"lightgrey"}}>
      <Text>비밀번호 변경</Text>
    </View>
    </TouchableOpacity>
    
    <View  style={{...styles.set_items, borderBottomWidth:1, borderColor:"lightgrey"}}>
      <Text>상세 인증 설정</Text>
    </View>
    
    <TouchableOpacity>
    <View style={styles.set_items}>
      <Text>로그아웃</Text>
    </View>
    </TouchableOpacity>
  </View>
  )
} 
const Alert_setting=()=>{
  return(
    <View style={styles.depart_set_container}>
      <TouchableOpacity>
        <View style={{...styles.set_items, borderBottomWidth:1, borderColor:"lightgrey"}}>
          <Text style>PUSH 알림 설정</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.set_items}>
        <Text>서비스</Text>
      </View>
    </View>
  )
}
const Other_setting =()=>{
  return (
    <View style={styles.depart_set_container}>
    <TouchableOpacity>
    <View style={{...styles.set_items, borderBottomWidth:1, borderColor:"lightgrey"}}>
        <Text>앱 권한 설정</Text>
      </View>
    </TouchableOpacity>
    <View style={{...styles.set_items, borderBottomWidth:1, borderColor:"lightgrey"}}>
      <Text>
        최초 설치일
      </Text>
    </View>
    <View style={styles.set_items}>
      <Text>
        앱버전
      </Text>
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
  setting_container:{
    marginTop:15,
    paddingBottom:10,
    borderBottomWidth:1,
  },
  depart_set_container:{
    width: fullWidth*0.9,
    justifyContent:"space-around",
  },
  alert_set_itme:{
    width: fullWidth*0.9,
    justifyContent:"space-around",
  },  
  set_items:{
    height: fullHeight*0.06,
    justifyContent:"center",
  },
  other_set_item:{
    height:fullHeight*0.06,
    justifyContent:"center",
  },
  setting_text:{
    fontWeight:"bold",
    fontSize:15
  }

})

export default Setting;
