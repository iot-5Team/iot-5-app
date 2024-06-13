import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import {host, SPport} from '@env';
import { fullHeight, fullWidth } from "../../devices";

export default function BookReadPage({route}){ 
    console.log(host);
    const [pageNum, setPageNum] = useState(1);
    const [contents, setContents] =useState("");
    const {book} = route.params;
    const callGetReadPageNum = async()=>{
        try{
            const response = await fetch(`http://${host}:${SPport}/book/text/${book.bookid}/${pageNum}`);
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
              }
            const bookpage = await response.json();
            console.log(bookpage);
            setContents(bookpage.bookwrite)
        }catch(error){
                console.error("error ocure status code: ", error);
        }
        

    }
    useEffect(()=>{
        callGetReadPageNum();
    },[pageNum])
    return(
 <SafeAreaView style={{alignItems:"center"}}>
    <View style={{ 
                marginTop: 30,
                width:fullWidth*0.9,
                height:0.45*fullHeight,
                backgroundColor: '#FFFFFF', // 카드 배경색 설정
                padding: 20, // 내부 여백 설정
                borderRadius: 10, // 테두리 둥글게 처리
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 4
                }}>
        <ScrollView>
        <Text>{contents}</Text>
        </ScrollView>
    </View>
    <View></View>
    
    <TouchableOpacity onPress={()=>setPageNum(pageNum+1)}><Text>다음</Text></TouchableOpacity>
 </SafeAreaView>);
}
