import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import {host, SPport,API_URL} from '@env'
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { bookImage, icon, bookImages} from "../../../../assets/images.js";
import Banner from "../../Banner";
import {
  bookView_height,
  bookItem_width,
  bookItem_height,
  fullWidth,
  fullHeight,
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
    dispatch(actionAddBooks(books));
  }
  const allBooks = useSelector((state) => state.bookListAll.books);
   //카테고리 바
   const categoryState = useSelector((state) => state.postCategoryReducer.categoryState);
  
  const [bookList, setBookList] =useState([]);

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
  //서버에서 책 데이터 가져오는 마운트 함수 
  useEffect(()=>{
    callAllTheBooks();
  },[])
  //책 로딩이 아직 안됐을 때 
  function LoadingBookList(){
    return(
    <View style={{alignItems:"center", justifyContent:"flex-start"}}>      
      <Banner/>
      <View style={{width:fullWidth, height:50}}>
        <Category />
      </View>
      <View style={{justifyContent:"center", alignItems:"center", height:fullHeight*0.4}}>
        <Text>책을 로딩하고 있습니다.</Text>
     </View>
    </View>
    )
  }
  function RenderBookItemList(){
    if(categoryState == 'AI'){
      return (
        <FlatList
          ListHeaderComponent={rednerHeader}
          data={bookList.filter(item => item.bookid >= 37)}  // Adding filter here
          renderItem={({ item }) => (
            <BookItem book={item}/>
          )}
          keyExtractor={(item) => item.bookid.toString()}  // Ensure key is a string
          numColumns={3}
          contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
          style={{ alignContent: "space-between" }}  // Corrected the typo in "space-between"
        ></FlatList>
      )
    } else if(categoryState != 'AI'){
      const categoryBooks = allBooks.filter(book => book.theme == categoryState);
      console.log('실행 데이터 ',categoryBooks);
      return(
        <FlatList
        ListHeaderComponent={rednerHeader}
        data={categoryBooks}
        renderItem={({ item }) => (
          <BookItem book={item}/>
        )}
        keyExtractor={(item) => item.bookid}
        numColumns={3}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        style={{ alignContent: "space-btween" }}
      ></FlatList>
      )
    } 
    
    
    
    return(
      <FlatList
      ListHeaderComponent={rednerHeader}
      data={bookList}
      renderItem={({ item }) => (
        <BookItem book={item}/>
      )}
      keyExtractor={(item) => item.bookid}
      numColumns={3}
      contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      style={{ alignContent: "space-btween" }}
    ></FlatList>
    )
  }

  return (
    <View style={styles.home_container}>
      { bookList.length == 0 ? LoadingBookList():RenderBookItemList() }
     
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
const BookItem = ({ book }) => {
  const navigation = useNavigation();
  const img = bookImages[book.bookid] || null;
  //const bookImage = bookImages[book.bookid] || icon.noim;
  return (
  <TouchableOpacity onPress={()=>{
    navigation.navigate('bookDes', {book: book})
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
          {
            img!=null?(
            <Image
              source={img}
              style={{
                width:bookItem_width,
                height:bookItem_height,
              }}
            />
            ):(<Image
              source={icon.noim}
              style={{
                width:40,
                height:40,
              }}
            />)
          }
      </View>

      <View style={{ width: bookItem_width, top: 5, height: 16 }}>
        {/*책제목 */}
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>{book.title}</Text>
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
          {book.author}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
  )
};
