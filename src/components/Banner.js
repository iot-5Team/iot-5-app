import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SliderBox } from "react-native-image-slider-box";
import { bannerImage } from "../../assets/images"; // 안나옴
import { View, Image } from "react-native";
import { ImageSlider } from "react-native-image-slider-banner"; // 동작함 

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
    <View style={{ marginTop: getStatusBarHeight() }}>
      {/* <SliderBox
        images={images}
        ImageComponent={renderImageComponent} // ImageComponent 설정
        sliderBoxHeight={180}
        autoplay
        circleLoop
      /> */}
    <ImageSlider 
    data={[
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
    autoPlay={false}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
/>
    </View>
  );
};

export default Banner;
