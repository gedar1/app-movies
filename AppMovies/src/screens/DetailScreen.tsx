import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import useMoviesdetails from '../hooks/useMoviesdetails';
import MovieDetails from '../components/movieDetails';

const screenHeight = Dimensions.get('screen').height;

interface IProps
  extends NativeStackScreenProps<RootStackParams, 'DetailScreen'> {}
export const DetailScreen = ({route}: IProps) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;

  const {isLoading, cast, movieDetails} = useMoviesdetails(movie.id);
  console.log(isLoading);
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri,
            }}
            style={styles.image}
          />
        </View>
      </View>
      <Text style={styles.textTitle}>{movie?.title}</Text>
      <Text style={styles.textDescription}>{movie?.overview}</Text>

      {isLoading ? (
        <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
      ) : (
        <MovieDetails />
      )}

      <Text style={styles.textTitle}>Averange : {movie?.vote_average}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textDescription: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
