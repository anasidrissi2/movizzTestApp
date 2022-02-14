import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { IMAGES_PATH } from "../../helpers/constants";
import theMovieDb from "../../helpers/themoviedb-lib/themoviedb";



export const MovieItem = (props)=>{
  const {item} = props.movieData;
  const {navigation} = props;
  // const movie = movieData;
  const imageUri = IMAGES_PATH + item.poster_path;
  console.log(item);
  console.log(imageUri);
  return (
    
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          margin: 5,
          width:120,
          height:200,
          padding:5,
          backgroundColor:"rgb(6, 25, 40)",
          borderWidth:1,
          borderColor:'rgba(52, 52, 52, 0.8)'
          
        }}>
        <Image
          resizeMode="cover"
          style={styles.movieItemImage}
          source={{ uri: imageUri }}
        />
        <Text style={styles.movieItemTitle}>{item.title}</Text>
      </View>
    )
}
const styles = StyleSheet.create({
  movieItemImage:{
    display:"flex",
    flex:1
  },
  movieItemTitle:{
    fontSize:16,
    fontWeight:'bold',
    textAlign:"center",
    color:"white",
    marginTop:10
  }
});