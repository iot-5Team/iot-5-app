import { SafeAreaView, View, Text, FlatList, Dimensions } from "react-native";
import {
  fullWidth,
  deviees_height,
  bookView_height,
  bookItem_width,
  bookItem_height,
  fullHeight,
} from "../../devices.js"; //디바이스 화면크기 관련 js파일

const setting_item = [
  { id: 1, pronunciation: "1번" },
  { id: 2, pronunciation: "2번" },
  { id: 3, pronunciation: "3번" },
  { id: 4, pronunciation: "4번" },
  { id: 5, pronunciation: "5번" },
  { id: 6, pronunciation: "6번" },
  { id: 7, pronunciation: "7번" },
  { id: 8, pronunciation: "8번" },
  { id: 9, pronunciation: "9번" },
];
const Setting = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: fullWidth * 0.05,
        }}
      >
        설정
      </Text>
      <View style={{}}>
        {/*프로필 이미지*/}

        <FlatList
          data={setting_item}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{ height: fullHeight * 0.1, justifyContent: "center" }}
            >
              <Text>{item.pronunciation}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Setting;
