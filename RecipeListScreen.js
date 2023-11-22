import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import  Header  from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeListFilter from '../components/RecipeCard'
import RecipeCard from '../components/RecipeCard'
import { useRoute } from '@react-navigation/native'

const RecipeListScreen = () => {
    const route = useRoute();
    const receivedData = route.params?.data;
  
    return (
        <SafeAreaView style={{flex:1,marginHorizontal:16}}>
           <Header headerText={`Hi,${receivedData}`} headericon={"Back"}/>
           <SearchFilter icon={''} placeholder={'Search Your Recipe'}/>

           <View>
            <Text style={{fontSize:22,fontWeight:'bold'}}>Categories</Text>
           <CategoriesFilter/>
           </View>
           <View style={{flex:1,marginTop:22}}>
            <Text style={{fontSize:22,fontWeight:'bold'}}>Popular Recipes</Text>
           <RecipeCard/>
           </View>
        </SafeAreaView>
    )
}

export default RecipeListScreen

const styles = StyleSheet.create({
    icon: {
        width: 50, 
        height: 50, 
      },
})