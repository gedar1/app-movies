import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {CardMovie} from './CardMovie';
import {IMovie} from '../interfaces/interfaceMovies';

interface IProposHorizontalSlider {
  title?: string;
  movies: IMovie[];
}
const HorizontalSlider = ({title, movies}: IProposHorizontalSlider) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item, index}) => (
          <CardMovie movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
