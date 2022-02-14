import React from "react"
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native"
import { Icon, Rating } from "react-native-elements";
import { Image } from "react-native-elements/dist/image/Image";
import { COVERS_PATH, IMAGES_PATH } from "../../helpers/constants";






export const MovieDetailsScreen = (props)=>{

  const {popularity,poster_path,overview,vote_average,original_title} = props.route.params.movieData.item;
  console.log("**********************************");
  console.log(props.route.params);
  const imageUri = IMAGES_PATH + poster_path;

  return(
    <View style={styles.MovieDetailsContainer}>
      <ImageBackground
          resizeMode="cover"
          style={styles.movieDetailsCover}
          imageStyle={styles.movieDetailsCImage}
          source={{ uri: imageUri }}
        >
        <View style={{width:50, display:'flex', alignItems:'center', alignSelf:'baseline',top:150  }}>
          <Icon name="star" type="antdesign" size={25} color="yellow" />
          <Text style={{color:'white', fontSize:18}}>{vote_average}</Text>
        </View>
      <Image
          resizeMode="contain"
          style={styles.movieDetailsPImage}
          source={{ uri: imageUri }}
        />

        </ImageBackground>
        <Text style={styles.movieDetailsTitle}>{original_title}</Text>
        
        <Text style={styles.movieDetailsSTitle}>Overview</Text>
        <Text style={styles.movieDetailsOverview}>{overview}</Text>

        <Button
          buttonStyle={{ width: 150, backgroundColor: 'red' }}
          containerStyle={{ margin: 50 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F"
          }}
          disabledTitleStyle={{ color: "#00F" }}
          linearGradientProps={null}
          icon={<Icon name="react" size={15} color="#0FF" />}
          iconContainerStyle={{ background: "#000" }}
          loadingProps={{ animating: true }}
          onPress={() => alert("click")}
          title="Add To Favorites"
          titleStyle={{ marginHorizontal: 5 }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  MovieDetailsContainer:{
    display:"flex",
    height:'100%',
    flexDirection:"column",
    backgroundColor:'#05131e',
  },
  movieDetailsCImage:{
    justifyContent:'flex-start',
    opacity:0.5,
    backgroundColor:'black',
    height:200

  },
  movieDetailsPImage:{
    width:150,
    height:200,
    position:'relative',
    top:50,
    borderRadius:10,
    shadowColor:'black',
  },
  movieDetailsTitle:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:100,
    color:'white'
  },
  movieDetailsSTitle:{
    fontSize:24,
    fontWeight:'normal',
    textAlign:'center',
    marginTop:55,
    color:'white'
  },
  movieDetailsOverview:{
    color:'white',
    fontSize:16,
    textAlign:'justify',
    padding:20,
    paddingBottom:20,
    margin:20,
    borderColor:'white',
    borderWidth:1,
    borderRadius:10
  },
  movieDetailsCover:{
    height:200,
    backgroundColor:'black',
    alignItems:'center',

  }

})