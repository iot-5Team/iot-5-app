import { SafeAreaView, View, Text, Image, StyleSheet,TouchableOpacity,ScrollView } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { bookItem_height, bookItem_width, fullHeight, fullWidth } from "../../devices";
import {host} from "@env"
import {icon, bookImages} from '../../../../assets/images'


export default function BookDescription({route}){
    const {book} = route.params;
    console.log("책이름", book.title);
    console.log(host);
    const navigation = useNavigation();
    const img = bookImages[book.bookid] || null;
    return (
        <SafeAreaView style={styles.container}>
             <View style={styles.iamgeContainer}>
             {
            img!=null?(
            <Image
              source={img}
              style={{
                width:fullWidth*0.43,
                height:fullHeight*0.3,
              }}
            />
            ):(<Image
              source={icon.noim}
              style={{
                width:50,
                height:50,
              }}
            />)
          }
            </View>
            <View style={styles.textContainer} >
               <Text style={styles.title}>{book.title}</Text>
               <Text>{book.author}</Text>
               <View style={styles.publishContainer}>
                    <View style={styles.publishView}>
                        <Text style={styles.detailText}>출판사</Text>
                        <Text style={{fontSize:11}}>{book.publisher}</Text>
                    </View>
                    <Text>|</Text>
                    <View style={styles.publishView}>
                        <Text style={styles.detailText}>출판일</Text>   
                        <Text style={{fontSize:11}}>{book.publication_date}</Text>
                    </View>
                    <Text>|</Text>
                    <View style={styles.publishView}>
                        <Text style={styles.detailText  }>장르</Text>
                        <Text style={{fontSize:11}}>{book.theme}</Text>
                    </View>
               </View>
               <View style={{ 
                marginTop: 30,
                height:0.3*fullHeight,
                backgroundColor: '#FFFFFF', // 카드 배경색 설정
                padding: 20, // 내부 여백 설정
                borderRadius: 10, // 테두리 둥글게 처리
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 4
                }}>
                    <ScrollView>
                     <Text>{book.story}</Text>
                    </ScrollView>
                </View>
            </View>
            <View style={{height:fullHeight*0.1}}>
            <TouchableOpacity onPress={()=>navigation.navigate("bookRead", {book : book})}>
                <View style={{marginTop:50  ,width:fullWidth*0.8, height:35,alignItems:"center", justifyContent:"center", backgroundColor:"#937DC2", borderRadius:10 }}>
                    <Text style={{color:"#FFFFFF"}}>눈과 귀로 읽으러 가기</Text>
                </View>
            </TouchableOpacity>
            </View>
          
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    iamgeContainer:{
        marginTop:10,
        width:fullWidth*0.43,
        height:fullHeight*0.3,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10, 
        backgroundColor:"#BDBDBD"
    },
    textContainer:{
        alignItems:"center", 
        width:fullWidth*0.8,
        height:fullHeight*0.45,
    },
    title:{
        marginTop:18,
        fontSize:20 , 
        fontWeight:"600", 
        maxWidth:250, 
        textAlign:"center"
    },
    publishContainer:{
        marginTop:10,
        width:fullWidth*0.8,
        flexDirection:"row", 
        justifyContent:"center"
    },
    publishView:{
        width:fullWidth*0.23, 
        alignItems:"center"
    },
    detailText:{
        fontSize:11,
        color:"#937DC2", 
        fontWeight:"600", 
        marginBottom:3
    },

})
 
