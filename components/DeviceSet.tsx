import {Dimensions} from 'react-native';

export const fullWidth = Dimensions.get('window').width;
export const fullHeight = Dimensions.get('window').height;
export const bookWidth = fullWidth*0.3;
export const bookHeight = bookWidth*1.43;
export const bookView ={
    width: bookWidth,
    height: fullHeight*0.25
};