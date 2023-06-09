import React from 'react';
import {ActivityIndicator, Animated, View} from 'react-native';
import {useAnimations} from '../hooks/useAnimations';
interface Props {
  uri?: string;
}

export const FadeInImage = ({uri}: Props) => {
  const {opacity, fadeIn} = useAnimations();
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading && (
        <ActivityIndicator
          color={'black'}
          size={30}
          style={{
            position: 'absolute',
          }}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeIn();
          setIsLoading(false);
        }}
        style={{
          width: '100%',
          height: 400,
          opacity,
        }}
      />
    </View>
  );
};
