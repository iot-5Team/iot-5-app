import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { fullHeight, fullWidth } from "../../../devices";
import {host} from "@env"
import { icon } from "../../../../../assets/images";
export default function BookDescription({route}){
    const {bookName} = route.params;
    console.log("책이름", bookName);
    console.log(host);
    return (
        <SafeAreaView>
            
            <View style={{marginTop:20,flexDirection:"row", justifyContent:"center"}}>
                <View>
                    <Image source={icon.noim} style={{width:fullWidth*0.43, height:fullHeight*0.3}}/>
                </View>
                <View style={{marginLeft:10, width:fullWidth*0.43, height:fullHeight*0.3}}>
                    <View style={{alignItems:"center"}} >
                        <Text style={{fontSize:20 , fontWeight:"600"}}>{bookName}</Text>
                    </View>
                    <></>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})
 
