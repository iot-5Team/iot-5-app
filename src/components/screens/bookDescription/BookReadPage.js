import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {host, SPport} from '@env';


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
 <SafeAreaView>
    <Text>{contents}</Text>
    <TouchableOpacity onPress={()=>setPageNum(pageNum+1)}><Text>다음</Text></TouchableOpacity>
 </SafeAreaView>);
}
