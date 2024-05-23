import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";

import { bookImage, icon } from "../../../../assets/images.js";
import Banner from "../../Banner";
import {
  bookView_height,
  bookItem_width,
  bookItem_height,
} from "../../devices.js"; //디바이스 화면크기 관련 js파일
import Category from "../categories/Category.js";

//책 리스트
const books = [
  { id: "1", title: "인간실격", cover: bookImage.dqhm },
  { id: "2", title: "셜록홈즈", cover: bookImage.shlh },
  { id: "3", title: "총 균 쇠", cover: bookImage.gga },
  { id: "4", title: "크림슨의 미궁", cover: bookImage.mocs },
  { id: "5", title: "미움받을 용기", cover: bookImage.ctbh },
  { id: "6", title: "누가 내 머리에 똥 쌌어?", cover: bookImage.wsmp },
  { id: "7", title: "모모", cover: bookImage.momo },
  { id: "8", title: "탈무드", cover: bookImage.tlmd },
  { id: "9", title: "개미", cover: bookImage.ant },
];

export default function Home({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.home_container}>
      <FlatList
        ListHeaderComponent={rednerHeader}
        data={books}
        renderItem={({ item }) => (
          <BookItem title={item.title} cover={item.cover} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        style={{ alignContent: "space-btween" }}
      ></FlatList>
    </View>
  );
}
//스타일 정리
const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    alignItems: "center",
  },

  main1Icon: {
    width: 100,
    height: 140,
    overflow: "hidden",
  },
});

//해더 구성 컴포넌트
const rednerHeader = () => (
  <>
    <Banner />
    <Category />
  </>
);

//책 구성 레이아웃
const BookItem = ({ title, cover }) => (
  <TouchableOpacity>
    <View
      style={{
        width: bookItem_width,
        height: bookView_height,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
      }}
    >
      <Image
        source={cover}
        style={{
          width: bookItem_width,
          height: bookItem_height,
          borderRadius: 5,
        }}
      />
      <View style={{ width: bookItem_width, top: 5, height: 16 }}>
        {/*책제목 */}
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>{title}</Text>
      </View>
      <View
        style={{
          width: bookItem_width,
          top: 5,
          height: 14,
          flexDirection: "row",
        }}
      >
        <Image source={icon.star} style={{ width: 10, height: 10 }} />
        <Text style={{ width: bookItem_width, color: "grey", fontSize: 10 }}>
          {" "}
          평점/10.0{" "}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
