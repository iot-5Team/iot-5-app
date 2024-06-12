import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from '@rneui/themed';
import MyPages from "./constructScreens/MyPages";
import Account from "./Account";
import Home from "./constructScreens/Home";
import Genre from "./constructScreens/Genre";
import Setting from "./constructScreens/Settings";

import BookDescription from "./bookDescription/BookDescription";
import BookReadPage from "./bookDescription/BookReadPage";

const Tabs = createBottomTabNavigator(); //dsaf
const Stack = createNativeStackNavigator(); //

export default function StackScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="Tab" component={TabScreens} />
        <Stack.Screen name="bookDes" component={BookDescription}/>
        <Stack.Screen name="bookRead" component={BookReadPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function TabScreens() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarActiveTintColor: "#fff", // 활성 탭 아이템의 색상
        tabBarInactiveTintColor: "black", // 비활성 탭 아이템의 색상
        // tabBarStyle:{height:80,}
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Icon 
            type='material-community'
            name="home-variant" size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyPage"
        component={MyPages}
        options={{
          tabBarIcon: () => (
            <Icon
              type='material-community'
              name="book-multiple" //ballout
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Genre"
        component={Genre}
        options={{
          tabBarIcon: () => (
            <Icon
              type='material-community'
              name="rhombus-split" //ballout
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: () => (
            <Icon
              type='material-community'
              name="cog" //ballout
              size={30}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
