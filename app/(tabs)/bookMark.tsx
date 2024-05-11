  import {Image, StyleSheet, SafeAreaView, ScrollView, FlatList} from 'react-native'
  import { ThemedText } from '@/components/ThemedText';
  import { ThemedView } from '@/components/ThemedView';
  import Category from '@/components/Categories/Category';
  export default function BookMarkScreen(){
      return (
      <SafeAreaView>
          <ScrollView>
          <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome!</ThemedText>  
          </ThemedView>
          <Category/>
          </ScrollView>
      </SafeAreaView>
      )
  }
  const styles = StyleSheet.create({
      titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
      stepContainer: {
        gap: 8,
        marginBottom: 8,
      },
      reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
      },
    });