import React, { useState }  from "react";
import { FlatList, Button, Text, TouchableOpacity, StyleSheet, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import theMovieDb from "../../helpers/themoviedb-lib/themoviedb";
import { MovieItem } from "../components/MovieItem";



const MoviesListScreen = ({navigation})=>{

  const favorites = useSelector(state => state);

  const [moviesData, setMoviesData] = useState({movies:[], success:true, error:false});
  const getMovies = ()=> {
    theMovieDb.movies.getPopular({},
      (movies)=> {
        movies = JSON.parse(movies)
        if (movies.results && movies.results.length > 0) {
          setMoviesData({
            page: movies.page,
            movies: movies.results,
            success: true,
            error: false
          })
        }
     },
     (error)=> {
       setMoviesData({
         page: 0,
         movies: [],
         success:false,
         error:true,
         errorData:error
       })
     })
  }

  if(moviesData.error){
    return (
    <View style={styles.errorContainer}>
      <Text>Error getting data please check your internet connection</Text>
        <Text>{moviesData.errorData}</Text>
      </View>)
  }
  if(moviesData.movies.length===0){
    return (
      <View style={styles.buttonContainer}>
        <Text style={{color:'white', fontSize:18, textAlign:'center',
      marginBottom:50, color:'gray'}}>Click to show most popular movies</Text>
        <Button color='#ed1c24' style={styles.moviesDetailsButton} title="Movies List" onPress={()=>getMovies()} />
      </View>
    )
  }
  return (
    <View style={styles.movieListContainer}>
      {/* <Text style={styles.screenTitle}>Popular movies</Text> */}
      <FlatList
        data={moviesData.movies}
        renderItem={(movie) => (
          // <Text>hello</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('MovieDetails',{movieData:movie})}>
            <MovieItem movieData={movie} />
          </TouchableOpacity>
        )}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}
const styles =StyleSheet.create({
  screenTitle:{
    color:'#ed1c24',
    fontSize:24,
    padding:10,
    fontWeight:'bold',
    borderColor:'rgba(52, 52, 52, 1)'
  },
  movieListContainer:{
    backgroundColor:'#05131e',
    paddingTop:75,
    paddingBottom:25
  },
  buttonContainer:{
    display:"flex",
    flex:1,
    justifyContent:'center',
    backgroundColor:'#05131e',
    padding:50
  },
  moviesDetailsButton:{
    backgroundColor:'red',
    borderRadius:10
  },
  
})
export default MoviesListScreen;