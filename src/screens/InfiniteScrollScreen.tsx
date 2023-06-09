import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ActivityIndicator} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';

function FlatListItemMenu({
  numbers,
  loadMore,
}: {
  numbers: number[];
  loadMore: () => void;
}): React.JSX.Element {
  const footerActivityIndicator = React.useCallback(() => {
    return (
      <View
        style={{
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={25} color="black" />
      </View>
    );
  }, []);

  return (
    <FlatList
      data={numbers}
      keyExtractor={item => item.toString()}
      renderItem={({item}) => (
        <FadeInImage uri={`https://picsum.photos/id/${item}/1024/1024`} />
      )}
      ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
      ListFooterComponent={footerActivityIndicator}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
    />
  );
}

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatListItemMenu numbers={numbers} loadMore={loadMore} />
    </View>
  );
};
