import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import {host, SPport, flask, FSport} from '@env';
import { fullHeight, fullWidth } from "../../devices";

export default function BookReadPage({route}){ 
    console.log(host);
    const [pageNum, setPageNum] = useState(1);
    const [contents, setContents] =useState("");
    const [musicUrl, setMusicUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const {book} = route.params;
    // const [base64Image, setBase64Image] = useState('');


    const base64ToBlob = (base64, type) => {
        const binaryString = window.atob(base64);  // base64 문자열 디코드
        const len = binaryString.length;
        const bytes = new Uint8Array(len);  // 같은 길이의 타입 배열 생성
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return new Blob([bytes], { type: type });  // 타입 배열에서 Blob 생성
    };
      
    // const base64ToBlob = (base64, type) => {
    //     const binary = atob(base64);
    //     const array = [];
    //     for (let i = 0; i < binary.length; i++) {
    //         array.push(binary.charCodeAt(i));
    //     }
    //     return new Blob([new Uint8Array(array)], { type });
    // };
    //음악 &  이미지 요청 코드
    const fetchMusicAndImage = async()=>{
        const data = {
            "bookid": book.bookid,
            "page": pageNum,
        };
        try{
            // ${flask}:${FSport}
        const response = await fetch(`http://192.168.0.36:8000/process-event/`,{
            method: "POST",
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            }
        )
        if (!response.ok) {
            throw new Error('Network response was not ok');

        }
        const reqData = await response.json();
        const base64Image = reqData.image;
        const base64String = reqData.music;
        const uri = `data:image/jpeg;base64,${base64Image}`;
        setImageUrl(uri)

        // console.log('체크 포인트 2',base64Image);
        // const musicBlob = base64ToBlob(base64String, 'audio/mpeg');
        // console.log('체크 포인트 3')
        // const newMusicUrl = URL.createObjectURL(musicBlob);
        // console.log('체크 포인트 4')
        // setMusicUrl(prevUrl => {
        //     if (prevUrl) {
        //         URL.revokeObjectURL(prevUrl);
        //     }
        //     return newMusicUrl;
        // });

        // if (base64Image) {
        //     const imageBlob = base64ToBlob(base64Image, 'image/png');
        //     const newImageUrl = URL.createObjectURL(imageBlob);
        //     setImageUrl(newImageUrl);
        // }

        }catch(error){
            console.error('Error posting data to Flask server:', error);
        }
    }
    
    
    // react 리드페이지 추출 코드
    if (book.bookid >= 37) {
       
       
        fetchMusicAndImage();
        
        // const config = {"Content-Type": 'application/json'};
        // axios.post(`${FlaskServerIp}/process-event/`, data, config)
        //     .then((req) => {
        //         console.log(req.data);
        //         const base64Image = req.data.image;
        //         const base64String = req.data.music;

        //         const musicBlob = base64ToBlob(base64String, 'audio/mpeg');
        //         const newMusicUrl = URL.createObjectURL(musicBlob);
        //         setMusicUrl(prevUrl => {
        //             if (prevUrl) {
        //                 URL.revokeObjectURL(prevUrl);
        //             }
        //             return newMusicUrl;
        //         });

        //         if (base64Image) {
        //             const imageBlob = base64ToBlob(base64Image, 'image/png');
        //             const newImageUrl = URL.createObjectURL(imageBlob);
        //             setImageUrl(newImageUrl);

        //         }
        //     })
        //     .catch((err) => {
        //         console.error('Error posting data to Flask server:', err);
        //     });
    }





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
        fetchMusicAndImage();
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
    <View>
    { imageUrl != '' ? (
        <Image source={{uri: imageUrl}} style={{width:100, height:100}}/>
    ):(
        <Text>이미지를 불려오는 중입니다.</Text>
    )

    }
        
    </View>
    
    <TouchableOpacity onPress={()=>setPageNum(pageNum+1)}><Text>다음</Text></TouchableOpacity>
 </SafeAreaView>);
}
