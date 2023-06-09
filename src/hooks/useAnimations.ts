import {useRef} from 'react';
import {Animated} from 'react-native';
export const useAnimations = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (time: number = 1000) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: time,
      useNativeDriver: true,
    }).start(() => console.log('Animation finished'));
  };
  const fadeOut = (time: number = 1000) => {
    Animated.timing(opacity, {
      toValue: 0.4,
      duration: time,
      useNativeDriver: true,
    }).start();
  };

  const startMoving = (initPosition: number, duration: number = 300) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      //   easing: Easing.bounce,
    }).start(() => console.log('Animation finished'));
  };

  return {
    fadeIn,
    fadeOut,
    opacity,
    position,
    startMoving,
  };
};
