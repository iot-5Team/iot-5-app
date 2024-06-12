import { SafeAreaView, View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { bookItem_height, bookItem_width, fullHeight, fullWidth } from "../../devices";
import {host} from "@env"
import {icon} from '../../../../assets/images'

export default function BookDescription({route}){
    const {book} = route.params;
    console.log("책이름", book.title);
    console.log(host);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{alignItems:"center",}}>
            
          
             <View style={{width:fullWidth*0.43, height:fullHeight*0.3, alignItems:"center",justifyContent:"center",borderRadius:10, backgroundColor:"#BDBDBD"}}>
                <Image source={icon.noim} style={{width:50, height:50}}/>
            </View>
            
            <View style={{alignItems:"center"}} >
               <Text style={{fontSize:20 , fontWeight:"600"}}>{book.title}</Text>
               <Text>{book.author}</Text>
               <Text>{book.story}</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("bookRead", {book : book})}>
                <View>
                    <Text>눈과 귀로 읽으러 가기</Text>
                </View>
            </TouchableOpacity>
        
          
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})
 
