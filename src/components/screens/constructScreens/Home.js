import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import {host, SPport,API_URL} from '@env'
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { bookImage, icon } from "../../../../assets/images.js";
import Banner from "../../Banner";
import {
  bookView_height,
  bookItem_width,
  bookItem_height,
} from "../../devices.js"; //디바이스 화면크기 관련 js파일
import Category from "../categories/Category.js";
import { actionAddBooks } from "../../../reduxContainer/actions/addbooksAction.js";

//책 리스트
const books = [
  { id: "1", title: "인간실격", cover: bookImage.dqhm },
  { id: "2", title: "셜록홈즈", cover: bookImage.shlh },
  { id: "3", title: "총 균 쇠", cover: bookImage.gga },
  { id: "4", title: "크림슨의 미궁", cover: bookImage.mocs },
  { id: "5", title: "미움받을 용기", cover: bookImage.ctbh },
  { id: "6", title: "누가 내 머리에 똥 쌌어?", cover: bookImage.wsmp },
  { id: "7", title: "모모", cover: bookImage.momo },
  { id: "8", title: "탈무드", cover: bookImage.tlmd },
  { id: "9", title: "개미", cover: bookImage.ant },
];

export default function Home({ navigation }) {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const setUpBookData =(books)=>{
    console.log("책은 실행됬음", books);
    dispatch(actionAddBooks(books));
  }
  const confirm = useSelector((state)=>state.initialBooks)
  const [bookList, setBookList] =useState([]);
console.log("데이터 입니다 ===============",confirm);

  const callAllTheBooks = async () => {
    //console.log(`${API_URL}/book/all`); 확인용 데이터셋
    try {
      //http://192.168.0.77:8080/book/all
      const response = await fetch(`http://${host}:${SPport}/book/all`);
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      const data = await response.json();
      //console.log(data);// response 데이터 출력
      setBookList(data);// 북리스트에 저장
      setUpBookData(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  useEffect(()=>{
    callAllTheBooks();
  },[])
  function LoadingBookList(){
    return(
    <SafeAreaView style={{alignItems:"center", justifyContent:"flex-start"}}>
      <Banner />
      <Category />
      <View style={{justifyContent:"center", justifyContent:"center"}}>
        <Text>책을 로딩하고 있습니다.</Text>
     </View>
    </SafeAreaView>
    )
  }
    
  
  

  return (
    <View style={styles.home_container}>
      { bookList.length == 0 ? LoadingBookList():(
         <FlatList
         ListHeaderComponent={rednerHeader}
         data={bookList}
         renderItem={({ item }) => (
           <BookItem title={item.title} author={item.author}  />
         )}
         keyExtractor={(item) => item.bookid}
         numColumns={3}
         contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
         style={{ alignContent: "space-btween" }}
       ></FlatList>
      )
      }
     
    </View>
  );
}
//스타일 정리
const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    alignItems: "center",
  },

  main1Icon: {
    width: 100,
    height: 140,
    overflow: "hidden",
  },
});

//해더 구성 컴포넌트
const rednerHeader = () => (
  <>
    <Banner />
    <Category />
  </>
);

//책 구성 레이아웃
const BookItem = ({ title,author}) => {
  const navigation = useNavigation();
  return (
  <TouchableOpacity onPress={()=>{
    navigation.navigate('bookDes', {bookName: title})
  }}>
    <View
      style={{
        width: bookItem_width,
        height: bookView_height,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
      }}
    >
      <View style={{ 
        backgroundColor:"#EDEDED",
        width: bookItem_width,
        height: bookItem_height,
        borderRadius: 5,
        alignItems:"center", justifyContent:"center"
        }}>
        <Image
          source={icon.noim}
          style={{
            width:40,
            height:40,
          }}
        />
      </View>

      <View style={{ width: bookItem_width, top: 5, height: 16 }}>
        {/*책제목 */}
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>{title}</Text>
      </View>
      <View
        style={{
          width: bookItem_width,
          top: 5,
          height: 14,
          flexDirection: "row",
        }}
      >
        
        <Text style={{ width: bookItem_width, color: "grey", fontSize: 10 }}>
          {author}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
  )
};
