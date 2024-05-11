import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { fullWidth } from '../DeviceSet';
import {RootState, CategoryAction} from '../reduxContainer/types'
import {categoryChangeAction} from '../reduxContainer/actions/categoryAction';

const Category_item =[
    { id: 1, title: "인기" },
    { id: 2, title: "신작" },
    { id: 3, title: "판타지" },
    { id: 4, title: "현판" },
    { id: 5, title: "무협" },
    { id: 6, title: "로판" },
    { id: 7, title: "드라마" },
    { id: 8, title: "로맨스" },
]
export default function Category(){
    const categoryState = useSelector(
        (state: RootState) => state.categoryReducer.category
      );
    console.log(categoryState);
    const dispatch:Dispatch<CategoryAction>=useDispatch();
    const handleCategoryClick = (category:string) => {   
        dispatch(categoryChangeAction(category));
    };
    return(
        <View style={styles.category_container}>
            <View style={styles.category_direction}>
                <View style={styles.category_AI}>
                    <Text>AI</Text>
                </View>
                <FlatList
                    data={Category_item}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>handleCategoryClick(item.title)}>
                            <View style={styles.categories_item}>
                                <Text style={styles.categories_item_text}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item)=>item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.category_bar_width}
                ></FlatList>
            </View>
        </View>
    )
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
})