import { Dimensions } from "react-native";

export const fullWidth=Dimensions.get('window').width; //디바이스 가로길이측정
export const fullHeight =Dimensions.get('window').height; //디바이스 높이측정
export const bookView_height=fullHeight*0.25; // 책 한권의 높이 비율
export const bookItem_width=fullWidth*0.3; // 책 한권의 길이 비율
export const bookItem_height=bookItem_width*1.43;
