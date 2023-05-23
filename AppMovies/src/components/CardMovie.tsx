import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IMovie} from '../interfaces/interfaceMovies';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {DetailScreen} from '../screens/DetailScreen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/Navigation';

interface Props {
  movie?: IMovie;
  height?: number;
  width?: number;
}

// type RootStackParamList = {
//   DetailScreen: IMovie | undefined;
// };

// type HomeScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'DetailScreen'
// >;
export const CardMovie = ({movie, height = 420, width = 300}: Props) => {
  const {top} = useSafeAreaInsets();

  const navigation = useNavigation<RootStackParams>();

  const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  return (
    <TouchableOpacity
      onPress={() => navigation?.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 5,
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});
