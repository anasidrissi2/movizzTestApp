import React, { useState }  from "react";
import { FlatList, Button, Text, TouchableOpacity, StyleSheet } from "react-native";
import theMovieDb from "../../helpers/themoviedb-lib/themoviedb";
import { MovieItem } from "../components/MovieItem";



const MoviesListScreen = ({navigation})=>{

  const [moviesData, setMoviesData] = useState({movies:[], success:true, error:false});
  const getMovies = ()=> {
    console.log('function called yes its been called');
    theMovieDb.movies.getPopular({},
      (movies)=> {
        console.log(movies);
        movies = JSON.parse(movies)
        if (movies.results && movies.results.length > 0) {
    console.log('accessible movies');
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
    return (<Button title="Couldn't retreive data Reload ?"  onPress={()=>getMovies() } />)
  }
  if(moviesData.movies.length===0){
    return (<Button title="Movies List" onPress={()=>getMovies()} />)
  }
  return (
    <FlatList
      style={styles.movieListContainer}
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
  )
}
const styles =StyleSheet.create({
  movieListContainer:{
    backgroundColor:'#05131e',
    paddingTop:50
  }
})
export default MoviesListScreen;