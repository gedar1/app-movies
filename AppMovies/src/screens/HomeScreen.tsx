import React from 'react';

import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {CardMovie} from '../components/CardMovie';
import HorizontalSlider from '../components/HorizontalSlider';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');
const HomeScreen = () => {
  const {
    moviesNowPlaying,
    moviesTopRated,
    moviesUpComing,
    loading,
    moviesPopular,
  } = useMovies();
  const {top} = useSafeAreaInsets();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 450}}>
          <Carousel
            layout={'default'}
            data={moviesNowPlaying!}
            sliderWidth={windowWidth}
            itemWidth={300}
            renderItem={({item, index}) => <CardMovie movie={item} />}
          />
        </View>

        <HorizontalSlider title="Movies Trending" movies={moviesTopRated!} />
        <HorizontalSlider title="Movies Populars" movies={moviesPopular!} />
        <HorizontalSlider title="Movies UpComing" movies={moviesUpComing!} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
