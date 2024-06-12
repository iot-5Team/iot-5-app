import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SliderBox } from "react-native-image-slider-box";// 안나옴 삭제해야함
import { bannerImage } from "../../assets/images"; 
import { View, Image } from "react-native";
import { ImageSlider } from "react-native-image-slider-banner"; // 동작함 
import { fullWidth,fullHeight } from './devices';

const Banner = () => {
  const images = [
    bannerImage.banner1,
    bannerImage.banner2,
    bannerImage.banner3,
  ];

  // 이미지를 렌더링하기 위해 사용할 ImageComponent 설정
  const renderImageComponent = (image) => {
    return <Image source={image} style={{ flex: 1, resizeMode: 'contain' }} />;
  };

  return (
    <View style={{width:fullWidth, height:fullHeight*0.32}}>
    <ImageSlider 
    data={[
        {img: bannerImage.banner1},
        {img: bannerImage.banner2},
        {img: bannerImage.banner3}
    ]}
    localImg={true}
    autoPlay={true}
    timer={1500}
    closeIconColor="#fff"
    
/>
    </View>
  );
};

export default Banner;
