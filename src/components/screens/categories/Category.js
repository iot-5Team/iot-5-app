import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux"; //redux 함수
import { actionChangeCategory } from "../../../reduxContainer/actions/categoryAction.js"; //redux 액션 함수

import {fullWidth} from "../../devices.js"; //디바이스 화면크기 관련 js파일

const category_itme = [
  { id: 1, title: "인기도서" },
  { id: 2, title: "신작" },
  { id: 3, title: "판타지" },
  { id: 4, title: "현판" },
  { id: 5, title: "무협" },
  { id: 6, title: "로판" },
  { id: 7, title: "드라마" },
  { id: 8, title: "로맨스" },
];
function Category() {
  //카테고리 바
  const categoryState = useSelector(
    (state) => state.postCategoryReducer.categoryState
  );
  console.log(categoryState);

  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(actionChangeCategory(category));
  };

  return (
    <View style={styles.category_container}>
      <View style={styles.category_direction}>
        <View style={styles.category_AI}>
          <Text style={{ fontSize: 16 }}>AI</Text>
        </View>
        <FlatList
          data={category_itme}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCategoryClick(item.title)}>
              <View style={styles.categories_item}>
                <Text style={styles.categories_item_text}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal={true} // 가로 방향 스크롤을 활성화합니다.
          showsHorizontalScrollIndicator={false}
          style={styles.category_bar_width}
        ></FlatList>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  category_container: {
    flex: 1,
    borderBottomWidth: 1,
    height: 50,
    alignItems: "flex-start",
    backgroundColor: "#FFF",
  },
  category_direction: {
    flexDirection: "row",
  },
  category_AI: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  cateogory_AI_text: {
    fontSize: 16,
  },
  categories_item: {
    width: 40,
    height: 30,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categories_item_text: {
    fontSize: 14,
  },
  category_bar_width: {
    width: fullWidth - 40,
  },
});

export default Category;
