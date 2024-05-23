import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { bookImage, icon } from "../../../../assets/images.js";

const devices_width = Dimensions.get("window").width;
const locker_list = [
  { id: 1, list: "최근 본" },
  { id: 2, list: "좋아요" },
  { id: 3, list: "다운 로드" },
];
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
const deviees_height = Dimensions.get("window").height; //디바이스 높이측정
const bookView_height = deviees_height * 0.25; // 책 한권의 높이 비율
const bookItem_width = devices_width * 0.3; // 책 한권의 길이 비율
const bookItem_height = bookItem_width * 1.43;
const Locker = () => {
  return (
    <FlatList
      data={locker_list}
      renderItem={({ item }) => (
        <View
          style={{
            marginTop: 30,
            width: devices_width * 0.33,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: "black",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.list}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      horizontal={true}
    ></FlatList>
  );
};
const BookItem = (
  { title, cover } //책 구성
) => (
  <View style={{ flexDirection: "row" }}>
    <View
      style={{
        width: devices_width * 0.7,
        justifyContent: "space-around",
        alignItems: "center",
        margin: 5,
        flexDirection: "row",
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
      <View style={{ width: devices_width * 0.35 }}>
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </View>
    </View>
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Text style={{ fontSize: 11 }}>이어보기 </Text>
      <Image source={icon.riab} style={{ height: 15, width: 15 }} />
    </View>
  </View>
);

const MyPages = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: devices_width * 0.05,
        }}
      >
        보관함
      </Text>
      <View>
        <Locker />
      </View>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookItem title={item.title} cover={item.cover} />
        )}
      ></FlatList>
      <BookItem />
    </SafeAreaView>
  );
};

export default MyPages;
